import { CoursePart } from "../types";

export const Part = (props: {part: CoursePart}) => {
    return (
        <div>
            {getContent(props.part)}
        </div>
    )
};

const getContent = (part: CoursePart) => {
    switch (part.kind) {
        case "basic":
            return (
                <div>
                    <p><b>{part.name} {part.exerciseCount}</b>
                    <br></br>
                    {part.description}</p>
                </div>
            )
        case "group":
            return (
                <div>
                    <p><b>{part.name} {part.exerciseCount}</b>
                    <br></br>
                    {part.groupProjectCount}</p>
                </div>
            )
        case "background":
            return (
                <div>
                    <p><b>{part.name} {part.exerciseCount}</b>
                    <br></br>
                    {part.description}
                    <br></br>
                    {part.backgroundMaterial}</p>
                </div>
            )
        case "special":
            return (
                <div>
                    <p><b>{part.name} {part.exerciseCount}</b>
                    <br></br>
                    {part.description}
                    <br></br>
                    required skills: {part.requirements.map((item, index) => {
                        return (
                            <span key={index}>
                                {item}{index !== part.requirements.length - 1 ? ", " : ""}</span>
                        )
                    })}</p>
                </div>
            )
        default:
            break;
    }
}