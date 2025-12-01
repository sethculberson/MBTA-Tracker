"use client";
import { getPredictions } from "@/lib/getPredictions";
import { useState } from "react";
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
  const [allStops, setAllStops] = useState(initialStops);
  const [direction, setDirection] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);

  async function handleLineSelection(l : Route) {
    setLine(l);
    await getStops(l.id)
      .then(s => setAllStops(s))
      .catch((err) => {
        console.error("Failed to set all stops.", err);
        setIsError(true);
      });
  }

  async function handleButton(){
    if (!line) return;
    if (!stop) return;

    await getPredictions(line, stop, direction)
      .then((preds) => {
        console.log("Setting predictions:", preds);
        setPredictions(preds);
      })
      .catch((err) => {
        console.error("Failed to set predictions.", err)
        setIsError(true);
      });
  }

  const labelStyle = "inline m-4 font-light text-[calc(1vw+12px)] text-white"

  return (
    <div className="">
      <h1 className="text-center text-[8vw] font-medium p-4 mb-8 bg-teal-900 text-white shadow">MBTA Tracker</h1>
      <div className="text-center m-auto border-2 border-white p-4 rounded-lg shadow max-w-[70vw]">
        <p className={labelStyle}>Line: </p>
        <LineSelector line={line ? line : redLine} setLine={handleLineSelection} />
        <p className={labelStyle}>Stop: </p>
        {allStops.length > 0 && stop && <StopSelector stop={stop} setStop={setStop} stopsData={allStops} ></StopSelector>}
        <div className="block m-auto p-4">
          <p className={labelStyle}>Direction: </p>
          {line && <select className="inline text-center p-2 w-auto border border-white text-white rounded-lg hover:border-orange-500 hover:text-orange-500 transition duration-100" id="direction-selector" name="directions" onChange={(e) => setDirection(parseInt(e.target.value))} value={direction}>
              {line.attributes.direction_names.map((dirName, index) => (
                  <option key={index} value={index}>
                      {dirName}
                  </option>
             ))}
          </select>}
        </div>
        <button className="m-auto block bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition duration-150" onClick={handleButton}>Get Trains</button>
      </div>
      {isError && <h4 className="text-xl text-white text-center p-8">Error fetching results</h4>}
      <PredictionsDisplay predictions={predictions} />
    </div>
  );
}
