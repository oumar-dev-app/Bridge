import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
}

const Container = ({ children}: ContainerProps) => {
    return (
        <div
            style={{
                maxWidth: "1280px",
                margin: "auto",
                padding: "",
            }}
        >
            {children}
        </div>
    )
}

export default Container;