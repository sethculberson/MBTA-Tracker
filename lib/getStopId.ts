export async function getStopId(stopName: string) : Promise<string> {
    let url = 'https://api-v3.mbta.com/stops?filter[name]=' + stopName;
    
    return fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch stop ID for stop name: " + stopName);
            }
            return res.json()})
        .then((data) => {
            data = data['data'];
            if (data.length > 0) {
                return data[0]['id'] as string;
            }
            return "";
        })
        .catch((err) => {
            console.error("Error: could not fetch or parse stop ID.", err);
            return "";
        });
}