import { Prediction, Route, Stop } from "@/types/types";

export async function getPredictions(route: Route, stop: Stop, direction : number) : Promise<Prediction[]>{
    let url = `https://api-v3.mbta.com/predictions?filter[stop]=${stop.id}&filter[route]=${route.id}&filter[direction_id]=${direction}`;

    return fetch(url)
        .then((r) => {
            if (!r.ok) {
                throw new Error(`HTTP error! status: ${r.status}`);
            }
            return r.json();
        })
        .then((data) => {
            const predictions = data['data'] as Prediction[];
            return predictions;
        })
        .catch((err) => {
            console.error("Error: could not fetch or parse predictions.", err);
            return [] as Prediction[];
        });
}