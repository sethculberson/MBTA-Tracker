import { Prediction } from "@/types/types";

export async function getPredictions(routeId: string, stopId: string) : Promise<Prediction[]>{
    console.log(`Getting predictions for route ${routeId} and stop ${stopId}`);
    let url = `https://api-v3.mbta.com/predictions?filter[stop]=${stopId}&filter[route]=${routeId}`;
    let res = await fetch(url);
    let data = await res.json();
    data = data['data'] as Prediction[];
    //data = data.map((item: Prediction) => item['attributes']['departure_time'])
    console.log(data);
    return data;
}