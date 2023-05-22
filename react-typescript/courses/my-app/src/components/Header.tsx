interface HeaderProps {
    headerText: string
}

export const Header = (props: HeaderProps) => {
    return (
        <h1>{props.headerText}</h1>
    )
};