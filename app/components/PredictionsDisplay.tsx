"use client";
import { Prediction } from "@/types/types";

export default function PredictionsDisplay({predictions}: {predictions: Prediction[]}) {
    function convertISO8601To12Hour(isoString: string): string {
        const date = new Date(isoString);

        const options: Intl.DateTimeFormatOptions = {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: 'America/New_York',
            timeZoneName: 'short', 
        };

        return date.toLocaleString('en-US', options);
    }

    return (
        <ul className="flex flex-col gap-4 mt-4">
            {predictions.length > 0 && predictions.map((item) => 
            item.attributes.departure_time && 
            <li key={item.id} className="text-lg text-blue-500 border border-gray-300 m-2 p-4 rounded-lg shadow">
                Departing: {convertISO8601To12Hour(item.attributes.departure_time)}
                {item.relationships.stop.id &&
                <p>{item.relationships.stop.id}</p>}
            </li>
            )}
        </ul>
    )
}