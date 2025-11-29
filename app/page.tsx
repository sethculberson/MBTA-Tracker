"use client";
import { getPredictions } from "@/lib/getPredictions";
import { useEffect, useState } from "react";
import { Prediction, Stop, Route } from "@/types/types";
import LineSelector from "./components/LineSelector";
import PredictionsDisplay from "./components/PredictionsDisplay";
import { getStops } from "@/lib/getStops";
import StopSelector from "./components/StopSelector";
import redLineStops from "@/data/redLineStops.json";

export default function Home() {
  const redLine : Route = {
    "attributes": {
      "color": "DA291C",
      "description": "Rapid Transit",
      "direction_destinations": [
        "Ashmont/Braintree",
        "Alewife"
      ],
      "direction_names": [
        "South",
        "North"
      ],
      "fare_class": "Rapid Transit",
      "listed_route": true,
      "long_name": "Red Line",
      "short_name": "",
      "sort_order": 10010,
      "text_color": "FFFFFF",
      "type": 1
    },
    "id": "Red",
    "links": {
      "self": "/routes/Red"
    },
    "relationships": {
      "agency": {
        "data": {
          "id": "1",
          "type": "agency"
        }
      },
      "line": {
        "data": {
          "id": "line-Red",
          "type": "line"
        }
      }
    },
    "type": "route"
  };

  const initialStops : Stop[] = redLineStops['data'];

  const [predictions, setPredictions] = useState([] as Prediction[]);
  const [line, setLine] = useState<Route>(redLine);
  const [stop, setStop] = useState<Stop>(initialStops[0]);
  const [allStops, setAllStops] = useState([] as Stop[]);

  async function handleLineSelection(l : Route) {
    setLine(l);
    let s = await getStops(l.id);
    setAllStops(s);
  }

  async function handleButton(){
    if (!line) return;
    if (!stop) return;

    let preds = await getPredictions(line, stop);
    setPredictions(preds);
  }

  useEffect(() => {
    handleLineSelection(redLine);
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold m-8">Welcome to the MBTA Monitoring App</h1>
      <div className="text-center m-4 border border-gray-300 p-4 rounded-lg shadow">
        <LineSelector line={line ? line : redLine} setLine={handleLineSelection} />
        {allStops.length > 0 && stop && <StopSelector stop={stop} setStop={setStop} stopsData={allStops} ></StopSelector>}
        <button className="m-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150" onClick={handleButton}>Get Trains</button>
      </div>
      <PredictionsDisplay predictions={predictions} />
    </div>
  );
}
