import { DiaryEntry } from "../types";

interface DiaryEntryProps {
    entry: DiaryEntry;
}

export const DiaryEntryComponent = (props: DiaryEntryProps) => {
    return (
        <div>
            <p><b>{props.entry.date}</b></p>
            <p>visibility: {props.entry.visibility}</p>
            <p>weather: {props.entry.weather}</p>
        </div>
    )
};

