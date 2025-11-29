"use client";
import { getRoute } from "@/lib/getRoute";
import { useState } from "react";
import { Prediction } from "@/types/types";
import LineSelector from "./components/LineSelector";
import PredictionsDisplay from "./components/PredictionsDisplay";

export default function Home() {
  const [routeId, setRouteId] = useState("");
  const [predictions, setPredictions] = useState([] as Prediction[]);
  const [line, setLine] = useState("");

  async function handleButton(){
    let preds = await getRoute(line);
    setPredictions(preds);
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-bold m-8">Welcome to the MBTA Monitoring App</h1>
      <div className="text-center m-4 border border-gray-300 p-4 rounded-lg shadow">
        <LineSelector line={line} setLine={setLine} />
        
        <button onClick={handleButton}>Get Route</button>
      </div>
      <PredictionsDisplay predictions={predictions} />
    </div>
  );
}
