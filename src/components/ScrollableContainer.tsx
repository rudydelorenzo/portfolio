import { ReactNode } from "react";
import { Flex } from "@mantine/core";

export const ScrollableContainer = ({ children }: { children: ReactNode }) => {
    return (
        <Flex
            style={{
                overflowY: "scroll",
            }}
            p={"2rem"}
            mih={"100%"}
            mah={"100%"}
            w={"100%"}
            direction={"column"}
        >
            {children}
        </Flex>
    );
};
