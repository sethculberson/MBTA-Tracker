import { Stop } from "@/types/types";

export async function getStops(lineId : string) : Promise<Stop[]>{
    let url = 'https://api-v3.mbta.com/stops?filter[route]=' + lineId;

    return fetch(url)
        .then(async (res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch stops for line: " + lineId);
            }
            return res.json();
        })
        .then((res) => {
            res = res['data'];
            return res as Stop[];
        })
        .catch((err) => {
            console.error("Error: could not fetch or parse stops.", err);
            return [] as Stop[];
        })
}