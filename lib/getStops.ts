import { Stop } from "@/types/types";

export async function getStops(lineId : string) : Promise<Stop[]>{
    let url = 'https://api-v3.mbta.com/stops?filter[route]=' + lineId;

    await fetch(url)
        .then(async (res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch stops for line: " + lineId);
            }
            await res.json()
                .then((data) => {
                    data = data['data'];
                    return data as Stop[];
                })
        });

    return [] as Stop[];
}