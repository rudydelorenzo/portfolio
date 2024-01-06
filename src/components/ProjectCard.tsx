"use client";

import { ProjectType } from "@/types";
import {
    Badge,
    Card,
    CardSection,
    Collapse,
    Group,
    Image,
    Stack,
    Text,
} from "@mantine/core";
import { LANGUAGE_COLORS } from "@/constants";
import { languageShorthandToFull } from "@/helpers";
import { CardPills } from "@/components/CardPills";
import { CardButtons } from "@/components/CardButtons";
import { ReactNode } from "react";
import { useDisclosure } from "@mantine/hooks";
import { LanguagesPillList } from "@/components/LanguagesPillList";
import { StarsAndForks } from "@/components/StarsAndForks";

export const ProjectCard = ({
    project,
}: {
    project: ProjectType;
}): ReactNode => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <Card
            key={project.name}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
        >
            <CardSection
                style={{
                    "--_card-section-mt": "calc(var(--card-padding)*-1)",
                }}
            >
                <Image
                    src={`${project.image}`}
                    fallbackSrc={`https://placehold.co/600x400?text=${project.name}`}
                    height={160}
                    alt={`${project.name} image`}
                />
            </CardSection>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{project.name}</Text>
                <Group gap={"sm"}>
                    <Badge color={LANGUAGE_COLORS[project.languages[0]]}>
                        {languageShorthandToFull(project.languages[0])}
                    </Badge>
                    {project.languages.length > 1 && (
                        <Text
                            c={"dimmed"}
                            size={"sm"}
                            onClick={() => toggle()}
                            style={{ cursor: "pointer" }}
                        >
                            +{project.languages.length - 1}
                        </Text>
                    )}
                </Group>
            </Group>

            {project.languages.length > 1 && (
                <Collapse in={opened}>
                    <LanguagesPillList
                        languages={project.languages}
                        fwdKey={project.name}
                    />
                </Collapse>
            )}

            <StarsAndForks githubURL={project.github} mb={"sm"} />

            <Text size="sm" c="dimmed" style={{ flexGrow: 1 }}>
                {project.description}
            </Text>

            <CardPills project={project} />

            <CardButtons project={project} />
        </Card>
    );
};
