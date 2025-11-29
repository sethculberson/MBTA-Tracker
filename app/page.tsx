"use client";
import { getRoute } from "@/lib/getRoute";
import { useState } from "react";
import { Prediction } from "@/types/types";

export default function Home() {
  const [routeId, setRouteId] = useState("");
  const [output, setOutput] = useState([] as Prediction[]);

  async function handleButton(){
    let id = await getRoute(routeId);
    setOutput(id);
    return id;
  }
  function convertISO8601To12Hour(isoString: string): string {
    const date = new Date(isoString);

    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short', 
    };

    return date.toLocaleString('en-US', options);
  }
  return (
    <div>
      <h1 className="text-center text-4xl font-bold m-8">Welcome to the MBTA Monitoring App</h1>
      <div className="text-center m-4 border border-gray-300 p-4 rounded-lg shadow">
        <input
          id="input1"
          type="text"
          value={routeId}
          onChange={(e) => setRouteId(e.target.value)}
          placeholder="Enter Route ID"
        />
        <button onClick={handleButton}>Get Route</button>
      </div>
      <ul className="columns-2 gap-4 mt-4">
        {output.map((item) => 
          item.attributes.departure_time && 
          <li key={item.id} className="text-lg text-blue-500 border border-gray-300 m-2 p-4 rounded-lg shadow">
            Departing: {convertISO8601To12Hour(item.attributes.departure_time)}
            {item.relationships.stop.id &&
            <p>{item.relationships.stop.id}</p>}
          </li>
        )}
      </ul>
    </div>
  );
}
