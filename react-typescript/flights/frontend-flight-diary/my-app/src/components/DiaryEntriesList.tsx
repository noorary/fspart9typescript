import { DiaryEntry } from "../types";
import { DiaryEntryComponent } from "./DiaryEntry";

interface DiaryEntriesListProps {
    entries: DiaryEntry[];
}

export const DiaryEntriesList = (props: DiaryEntriesListProps) => {
    return (
        <div>
            <h2>Diary entries</h2>
            {props.entries.map((item, index) => {
                   return (
                    <DiaryEntryComponent entry={item} key={index}></DiaryEntryComponent>
                   )
                })
            }
        </div>
    )
};