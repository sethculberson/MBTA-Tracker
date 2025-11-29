"use client";
import { getPredictions } from "@/lib/getPredictions";
import { useState } from "react";
import { Prediction, Stop } from "@/types/types";
import LineSelector from "./components/LineSelector";
import PredictionsDisplay from "./components/PredictionsDisplay";
import { getStops } from "@/lib/getStops";
import StopSelector from "./components/StopSelector";

export default function Home() {
  const [predictions, setPredictions] = useState([] as Prediction[]);
  const [line, setLine] = useState("");
  const [stop, setStop] = useState("");
  const [allStops, setAllStops] = useState([] as Stop[]);

  async function handleLineSelection(l : string) {
    setLine(l);
    let s = await getStops(l);
    setAllStops(s);
  }

  async function handleButton(){
    if (line === "") return;
    if (stop === "") return;

    let preds = await getPredictions(line, stop);
    setPredictions(preds);
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-bold m-8">Welcome to the MBTA Monitoring App</h1>
      <div className="text-center m-4 border border-gray-300 p-4 rounded-lg shadow">
        <LineSelector line={line} setLine={handleLineSelection} />
        {allStops.length > 0 && <StopSelector stop={stop} setStop={setStop} stopsData={allStops} ></StopSelector>}
        <button className="m-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150" onClick={handleButton}>Get Route</button>
      </div>
      <PredictionsDisplay predictions={predictions} />
    </div>
  );
}
