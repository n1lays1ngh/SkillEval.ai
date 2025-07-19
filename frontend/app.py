import streamlit as st
import requests

st.title("🔍 SkillCoachAI – Career Profile Analyzer")

st.markdown("Analyze your skills, projects, and GitHub profile to get career insights!")

with st.form("profile_form"):
    role = st.selectbox("🎯 Target Role", ["Backend Intern", "ML Engineer", "Full-Stack Intern", "DevOps Intern"])
    skills = st.text_area("🧠 Skills (comma-separated)", placeholder="Python, SQL, Git, Flask")
    projects = st.text_area("💼 Project Summaries", placeholder="Short descriptions of 2-3 projects...")
    github = st.text_input("🐙 GitHub Username", placeholder="e.g. johndoe")
    
    submitted = st.form_submit_button("🚀 Analyze My Profile")

if submitted:
    with st.spinner("Analyzing with AI..."):
        payload = {
            "role": role,
            "skills": skills,
            "projects": projects,
            "github_username": github
        }
        res = requests.post("http://localhost:8000/analyze-profile", json=payload)

        if res.status_code == 200:
            result = res.json()
            st.success("✅ Analysis Complete!")
            st.metric("🎯 Readiness Score", result['readiness_score'])
            st.markdown("### 🔍 Skill Gaps")
            st.write(result['skill_gaps'])

            st.markdown("### 💬 Project Feedback")
            st.write(result['project_feedback'])

            st.markdown("### 🛠️ Next Suggestions")
            st.write(result['next_suggestions'])
        else:
            st.error("Something went wrong. Please try again.")

            
