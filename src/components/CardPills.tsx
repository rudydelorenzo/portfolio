import { ProjectType } from "@/types";
import { ReactNode } from "react";
import { Badge, Group, ScrollArea } from "@mantine/core";

export const CardPills = ({ project }: { project: ProjectType }): ReactNode => {
    return (
        <ScrollArea scrollbars={"x"} mt={"lg"} type={"never"}>
            <Group gap={"sm"} wrap={"nowrap"}>
                {project.technologies.map((tech) => (
                    <Badge
                        key={`${project.name}-pill-${tech}`}
                        size={"sm"}
                        color={"#bbbbbb"}
                        variant={"outline"}
                    >
                        {tech.toUpperCase()}
                    </Badge>
                ))}
            </Group>
        </ScrollArea>
    );
};
