"use client";

import { ProjectType } from "@/types";
import { ReactNode } from "react";
import { Button, Group } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

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
                key={`visit-btn-${p.name}`}
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
                key={`gh-btn-${p.name}`}
                rightSection={<IconBrandGithub />}
            >
                Github
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
        // preventGrowOverflow solves the issue of GitHub button cropping on mobile
        <Group grow={true} /* preventGrowOverflow={false} */>
            {getButtonsFromProject(project).map((e) => e)}
        </Group>
    );
};
