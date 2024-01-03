import { ReactNode } from "react";

export const ScrollableContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div
            style={{
                width: "100%",
                maxHeight: "100%",
                minHeight: "100%",
                overflowY: "scroll",
                padding: "2rem",
            }}
        >
            {children}
        </div>
    );
};
