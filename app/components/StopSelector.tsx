import { getStops } from "@/lib/getStops";
import { Stop } from "@/types/types";

export default function StopSelector({stop, setStop, stopsData}: {stop: string, setStop: (stop: string) => void, stopsData: Stop[]}) {
    
    return (
        <select className="text-center p-4 w-full" id="stop-selector" name="stops" onChange={(e) => setStop(e.target.value)} value={stop}>
            {stopsData.map((s) => (
                <option key={s.id} value={s.id}>
                    {s.attributes.name}
                </option>
            ))}
        </select>
    )
}