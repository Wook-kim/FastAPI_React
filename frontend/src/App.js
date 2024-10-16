import React, { useState } from "react";
import axios from "axios";

function App() {
    const [compound, setCompound] = useState("");
    const [prediction, setPrediction] = useState("");

    const handlePredict = async () => {
        try {
            const response = await axios.post("http://192.168.201.31:3333/predict", { smiles: compound });
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("Error making prediction:", error);
        }
    };

    return (
        <div>
            <h1>AI Drug Discovery Platform</h1>
            <input 
                type="text" 
                value={compound} 
                onChange={(e) => setCompound(e.target.value)} 
                placeholder="Enter compound SMILES"
            />
            <button onClick={handlePredict}>Predict</button>
            {prediction && <p>Prediction: {prediction}</p>}
        </div>
    );
}

export default App;

