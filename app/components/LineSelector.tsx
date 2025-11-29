import lines from "../../data/lines.json";

export default function LineSelector({line, setLine}: {line: string, setLine: (line: string) => void}) {
    const linesData = lines.data;

    return (
        <select className="text-center p-4 w-full" id="line-selector" name="lines" onChange={(e) => setLine(e.target.value)} value={line}>
            {linesData.map((line) => (
                <option key={line.id} value={line.id}>
                    {line.attributes.long_name}
                </option>
            ))}
        </select>
    )
}