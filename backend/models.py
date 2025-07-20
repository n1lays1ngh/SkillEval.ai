from pydantic import BaseModel
from typing import List


class ProfileInput(BaseModel):
    role: str
    skills: str
    projects: str
    github_username: str

class RoadmapRequest(BaseModel):
    role: str
    gaps: List[str]

    class Config:
        schema_extra = {
            "example": {
                "role": "Backend Python Developer",
                "gaps": [
                    "Asynchronous programming with asyncio",
                    "Containerization with Docker",
                    "Database indexing and optimization",
                ]
            }
        }


class RoadmapResponse(BaseModel):
    roadmap: str

    