import { CoursePart } from "../types";
import { Part } from "./Part";

interface ContentProps {
    contentArray: CoursePart[];
}

export const Content = (props: ContentProps) => {
    return (
        <div>
            {props.contentArray.map((item, index) => {
                   return (
                    <Part part={item} key={index}></Part>
                   )
                })
            }
        </div>
    )
};