import { Stop } from "@/types/types";

export default function StopSelector({stop, setStop, stopsData}: {stop: Stop, setStop: (stop: Stop) => void, stopsData: Stop[]}) {
    function getStopById(stopId : string) : Stop {
        for (let i = 0; i < stopsData.length; i++) {
            if (stopsData[i].id === stopId) {
                return stopsData[i];
            }
        }
        console.error("Stop not found: " + stopId);
        return stopsData[0];
    }
    return (
        <select className="text-center p-4 w-full" id="stop-selector" name="stops" onChange={(e) => setStop(getStopById(e.target.value))} value={stop.id}>
            {stopsData.map((s) => (
                <option key={s.id} value={s.id}>
                    {s.attributes.name}
                </option>
            ))}
        </select>
    )
}