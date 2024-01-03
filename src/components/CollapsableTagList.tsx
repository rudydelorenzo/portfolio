import PROJECTS from "@/PROJECTS";
import { ReactNode } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Collapse, Text } from "@mantine/core";

export const CollapsableTagList = ({
    languages,
}: {
    languages: (typeof PROJECTS)[number]["languages"];
}): ReactNode => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <Collapse in={opened}>
            <Text>{/* ... content */}</Text>
        </Collapse>
    );
};
