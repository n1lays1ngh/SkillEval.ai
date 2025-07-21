import os
from typing import List
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from dotenv import load_dotenv
load_dotenv()
from backend.prompts.roadmap_generation_prompt import roadmap_gen_prompt

if "GOOGLE_API_KEY" not in os.environ:
    print("Warning: GOOGLE_API_KEY not set. Please set the environment variable.")


def create_roadmap_chain():
    llm = ChatGoogleGenerativeAI(
        model="gemini-2.0-flash",
        temperature=0.7,
        convert_system_message_to_human=True 
    )
    
    output_parser = StrOutputParser()
    chain = roadmap_gen_prompt | llm | output_parser

    return chain


def generate_roadmap_for_gaps(role: str, gaps: List[str]) -> str:
    
    if not gaps:
        return "No gaps provided. Please analyze skills first to identify gaps."

    roadmap_chain = create_roadmap_chain()

    
    gaps_string = ", ".join(gaps)

    
    print(f"Generating roadmap for role '{role}' with gaps: {gaps_string}")
    roadmap = roadmap_chain.invoke({
        "role": role,
        "gaps": gaps_string
    })
    print("Roadmap generation complete.")

    return roadmap
