import { Prediction, Route, Stop } from "@/types/types";

export async function getPredictions(route: Route, stop: Stop) : Promise<Prediction[]>{
    let url = `https://api-v3.mbta.com/predictions?filter[stop]=${stop.id}&filter[route]=${route.id}`;
    let res = await fetch(url);
    let data = await res.json();
    data = data['data'] as Prediction[];
    //data = data.map((item: Prediction) => item['attributes']['departure_time'])
    
    return data;
}