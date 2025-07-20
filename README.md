
# 🚀 SkillCoachAI

SkillCoachAI is an AI-powered assistant that evaluates a student's GitHub profile, resume, and project portfolio to assess their readiness for roles like Backend Intern, ML Engineer, or Full-Stack Developer.  
It provides personalized feedback, identifies skill gaps, and generates an actionable 30-day learning roadmap using advanced LLM capabilities.

---

## 🧠 What It Does

✅ Analyzes your resume, skills, projects, and GitHub activity  
🔍 Matches your current profile against selected job roles  
💡 Uses Gemini via LangChain to generate smart, structured feedback  
📈 Provides a score-based readiness report + improvement suggestions

---

## 🛠 Tech Stack

| Layer       | Tools / Frameworks                        |
|------------|--------------------------------------------|
| Frontend    | React + Tailwind CSS, ShadCN UI, Axios    |
| Backend     | FastAPI, LangChain, Pydantic              |
| LLM         | Google Gemini (via LangChain)             |
| GitHub API  | GitHub REST API                           |
| PDF Parsing | PyMuPDF / pdfplumber (optional)           |
| DevOps      | Docker (planned), Render for deployment   |
| Secrets     | .env for API keys                         |

---

## 📂 Project Structure

### Backend
```
skillcoach-backend/
├── main.py
├── api/
│   ├── routes.py
│   └── schemas.py
├── services/
│   ├── github_data.py
│   └── resume_parser.py
├── prompts/
│   └── role_match_prompt.py
├── chains/
│   └── role_match_chain.py
├── utils/
│   └── formatter.py
├── .env
├── requirements.txt
└── README.md
```

### Frontend (coming soon)
```
skillcoach-frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── App.jsx
├── tailwind.config.js
└── package.json
```

---

## ✅ Features Completed

| Step | Feature                          | LangChain Concept    | Status      |
|------|----------------------------------|-----------------------|-------------|
| 1    | Project Setup                    | –                     | ✅ Done      |
| 2    | PromptTemplate + Input Form      | Prompt Logic          | ✅ Done      |
| 3    | LLMChain (Role + Skill Matching) | LangChain Core        | ✅ Done      |
| 4    | GitHub API Integration           | Real-world signal     | ✅ Done      |
| 5    | StructuredOutputParser           | JSON-based output     | 🔜 In Progress |
| 6    | React UI → Result Dashboard      | Frontend display      | 🔜 To Start  |
| 7    | Roadmap Generator                | LangChain Sequencing  | 🔜 Planned   |
| 8    | Polish & Deploy                  | CI/CD + Hosting       | 🔜 Final Step |

---

## ✨ Your Contributions

- Designed modular FastAPI backend architecture  
- Built LangChain logic using PromptTemplate + LLMChain with Gemini  
- Integrated GitHub API to fetch and summarize real coding activity  
- Wrote skill-role matching prompt templates  
- Created structured service folders for scalable dev  
- **Upcoming**: JSON parsing + frontend UI with React + Tailwind CSS

---

## 📦 How to Run Locally

1. Clone the repo
2. Create a `.env` file with your Google API key:
```
GOOGLE_API_KEY=your_key_here
```
3. Install backend dependencies:
```
cd skillcoach-backend
pip install -r requirements.txt
```
4. Run the FastAPI server:
```
uvicorn main:app --reload
```

*Frontend setup steps will be added once development begins.*

---

## 🧪 Sample Input

```json
{
  "role": "Backend Intern",
  "skills": "Python, Flask, SQL",
  "projects": "Blog app with Flask, REST API with SQLite",
  "github_info": "3 repos, 20 stars, top language: Python"
}
```

---

## 📌 Roadmap

- Add StructuredOutputParser for clean JSON responses  
- Build React frontend for user input and results  
- Generate roadmap suggestions via LangChain RunnableSequence  
- Add resume parsing functionality  
- Deploy backend and frontend

---

## 📬 License & Credits

Built with ❤️ using LangChain, FastAPI, and Google Gemini.  
This is an open-source student career assistant built for learning and community use.
