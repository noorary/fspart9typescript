interface TotalProps {
    contentArray: {
        name: string;
        exerciseCount: number;
      }[];
}

export const Total = (props: TotalProps) => {
    return (
        <div>
            <p>
                Number of exercises{" "}
                {props.contentArray.reduce((carry, part) => carry + part.exerciseCount, 0)}
            </p>
        </div>
    )
};