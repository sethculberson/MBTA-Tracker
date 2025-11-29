import lines from "../../data/lines.json";
import { Route } from "@/types/types";

export default function LineSelector({line, setLine}: {line: Route, setLine: (line: Route) => void}) {
    const linesData = lines.data;

    function getLineById(lineId : string) : Route {
        for (let i = 0; i < linesData.length; i++) {
            if (linesData[i].id === lineId) {
                return linesData[i];
            }
        }
        console.error("Line not found: " + lineId);
        return linesData[0];
    }
    return (
        <select className="text-center p-4 w-full" id="line-selector" name="lines" onChange={(e) => setLine(getLineById(e.target.value))} value={line.id}>
            {linesData.map((line) => (
                <option key={line.id} value={line.id}>
                    {line.id}
                </option>
            ))}
        </select>
    )
}