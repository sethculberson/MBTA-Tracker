import { Prediction } from "@/types/types";

let url = 'https://api-v3.mbta.com/predictions?filter[stop]=place-bbsta&filter[direction_id]=0';

export async function getRoute(routeId: string) : Promise<Prediction[]>{
    let res = await fetch(url);
    let data = await res.json();
    data = data['data'] as Prediction[];

    //data = data.map((item: Prediction) => item['attributes']['departure_time'])

    return data;
}