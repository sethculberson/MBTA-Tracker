export async function getStopId(stopName: string) : Promise<string> {
    let url = 'https://api-v3.mbta.com/stops?filter[name]=' + stopName;
    await fetch(url)
        .then(async (res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch stop ID for stop name: " + stopName);
            }
            await res.json()
                .then((data) => {
                    data = data['data'];
                    if (data.length > 0) {
                        return data[0]['id'];
                    }
                    return "";
                })
        });
    return "";
}