import os
import httpx
from fastapi import HTTPException
from dotenv import load_dotenv

load_dotenv()

# Load the token once when the module is imported
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
print("--- Attempting to load GitHub Token... ---")
if GITHUB_TOKEN:
    print(f"--- Loaded GITHUB_TOKEN successfully. Starts with: {GITHUB_TOKEN[:4]}... ---")
else:
    print("--- WARNING: GITHUB_TOKEN environment variable not found! ---")

HEADERS = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json",
}

async def get_github_data(username: str) -> str:
    """Fetches user profile, repos, and languages from GitHub and returns a summary string."""
    summary_parts = []
    async with httpx.AsyncClient() as client:
        try:
            # Get user profile
            user_response = await client.get(f"https://api.github.com/users/{username}", headers=HEADERS)
            user_response.raise_for_status()
            user_data = user_response.json()
            summary_parts.append(f"User: {user_data.get('name')} ({username}) with {user_data.get('public_repos', 0)} public repos and {user_data.get('followers', 0)} followers.")

            # Get user repos
            repos_response = await client.get(user_data['repos_url'], headers=HEADERS)
            repos_response.raise_for_status()
            repos_data = repos_response.json()

            # Sort repos by stars and get top 5
            top_repos = sorted(repos_data, key=lambda x: x['stargazers_count'], reverse=True)[:5]
            
            repo_summaries = []
            for repo in top_repos:
                lang_response = await client.get(repo['languages_url'], headers=HEADERS)
                languages = lang_response.json()
                lang_str = ", ".join(languages.keys())
                repo_summaries.append(f"- {repo['name']} (Stars: {repo['stargazers_count']}): Languages used are {lang_str}.")
            
            if repo_summaries:
                summary_parts.append("\nTop Repositories:")
                summary_parts.extend(repo_summaries)

        except httpx.HTTPStatusError as e:
            if e.response.status_code == 404:
                raise HTTPException(status_code=404, detail=f"GitHub user '{username}' not found.")
            else:
                raise HTTPException(status_code=500, detail=f"Error fetching data from GitHub: {e}")
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {e}")

    return "\n".join(summary_parts)
