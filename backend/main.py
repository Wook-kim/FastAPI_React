# main.py
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from rdkit import Chem

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://192.168.201.31:8000"],  # React frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CompoundData(BaseModel):
    smiles: str

@app.get("/")
async def root():
    return {"message": "Welcome to the AI-based drug discovery platform"}

@app.post("/predict")
async def predict(compound: CompoundData):
    # Here, you can load your AI model and perform prediction on the input compound
    # For now, let's just return a placeholder response.
    return {"prediction": f"Prediction for compound {compound.smiles}"}
