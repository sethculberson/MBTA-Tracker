import { Stop } from "@/types/types";

export async function getStops(lineId : string) : Promise<Stop[]>{
    let url = 'https://api-v3.mbta.com/stops?filter[route]=' + lineId;

    let res = await fetch(url);
    let data = await res.json();
    data = data['data'];
    console.log(data);
    return data;
}