"use client";

import { ProjectType } from "@/types";
import { ReactNode } from "react";
import { ActionIcon, Button, Group } from "@mantine/core";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const getButtonsFromProject = (p: ProjectType): ReactNode[] => {
    const buttons: ReactNode[] = [];

    if (p.url) {
        buttons.push(
            <Button
                color="blue"
                mt="md"
                radius="md"
                component={"a"}
                href={p.url}
                target={"_blank"}
            >
                <Group>
                    Visit
                    {/*<IconExternalLink />*/}
                </Group>
            </Button>,
        );
    }

    if (p.github) {
        buttons.push(
            <Button
                color="blue"
                mt="md"
                radius="md"
                variant={"outline"}
                component={"a"}
                href={p.github}
                target={"_blank"}
            >
                <Group>
                    Github
                    <IconBrandGithub />
                </Group>
            </Button>,
        );
    }

    return buttons;
};

export const CardButtons = ({
    project,
}: {
    project: ProjectType;
}): ReactNode => {
    return (
        <Group grow={true}>
            {getButtonsFromProject(project).map((e) => e)}
        </Group>
    );
};
