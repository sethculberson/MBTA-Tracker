export async function getStopId(stopName: string) : Promise<string> {
    let url = 'https://api-v3.mbta.com/stops?filter[name]=' + stopName;
    let res = await fetch(url);
    let data = await res.json();
    data = data['data'];
    
    if (data.length > 0) {
        return data[0]['id'];
    }
    return "";
}