from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains import LLMChain
from prompts.role_match_prompt import profile_analysis_prompt
from fastapi import FastAPI
from pydantic import BaseModel 
from fastapi.middleware.cors import CORSMiddleware
import os 
from dotenv import load_dotenv
from fastapi import HTTPException
import json 
from langchain_core.output_parsers import StrOutputParser
from services.github_data import get_github_data
from services.roadmap_generation import generate_roadmap_for_gaps
from typing import List
from models import ProfileInput,RoadmapRequest,RoadmapResponse
load_dotenv()


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, use specific domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    llm = ChatGoogleGenerativeAI(
        model="gemini-2.0-flash",
        temperature=0.5,
        google_api_key=os.getenv("GOOGLE_API_KEY")
    )

    chain = profile_analysis_prompt | llm | StrOutputParser()

    # response = chain.run({
    #     "role": "Backend Intern",
    #     "skills": "Python, Flask, SQL",
    #     "projects": "Blog app with Flask, REST API with SQLite",
    #     "github_info": "3 repos, 20 stars, top language: Python"
    # })

except Exception as e:
    llm = None
    chain = None 
    print(f"Error initializing LLM or Chain: {e}")


@app.post("/analyze-profile")
async def analyze_profile(data : ProfileInput):
    if not chain:
        raise HTTPException(status_code=500,detail="Chain Does not exist")
        
    github_summary = await get_github_data(data.github_username)

    input_data = {
        "role": data.role,
        "skills": data.skills,
        "projects": data.projects,
        "github_summary": github_summary
    }

    response_str = chain.invoke(input_data)

    if "```" in response_str:
        start_index = response_str.find('{')
        end_index = response_str.rfind('}') + 1
        if start_index != -1 and end_index != 0:
            response_str = response_str[start_index:end_index]
    
    try:
        return json.loads(response_str)
    except json.JSONDecodeError:
        print(f"LLM returned non-JSON response: {response_str}")
        raise HTTPException(
            status_code=500,
            detail={"error": "The model returned an invalid format.", "raw_output": response_str}
        )
    
@app.get("/")
def check_server_status():
    return {"message":"The server works fine proceed to evaluate your skill status"}



### GENERATING ROADMAP ENDPOINT
@app.post("/generate-roadmap", response_model=RoadmapResponse, tags=["2. Roadmap Generation"])
async def api_generate_roadmap(request: RoadmapRequest):
    if not request.gaps:
        raise HTTPException(
            status_code=400,
            detail="The 'gaps' list cannot be empty. Please provide at least one skill gap."
        )

    try:
        # This is where we call our new LangChain-powered function
        # from roadmap_generator.py
        generated_roadmap = generate_roadmap_for_gaps(
            role=request.role,
            gaps=request.gaps
        )
        return RoadmapResponse(roadmap=generated_roadmap)

    except Exception as e:
        # Basic error handling to catch issues during generation
        print(f"An error occurred during roadmap generation: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"An internal error occurred while generating the roadmap. Details: {str(e)}"
        )
    
