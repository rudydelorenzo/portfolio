import { Center, SimpleGrid, Stack, Text } from "@mantine/core";
import PROJECTS from "@/PROJECTS";
import { ReactNode } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Metadata } from "next";

const ProjectsPage = () => {
    return (
        <Center h={"100%"}>
            <Stack w={"90%"} maw={"1500px"}>
                <Text
                    size="2rem"
                    fw={700}
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan", deg: 90 }}
                    pb={10}
                    maw={"fit-content"}
                    ff={"monospace"}
                >
                    PROJECTS
                </Text>

                <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
                    {PROJECTS.map(
                        (project): ReactNode => (
                            <ProjectCard
                                key={`${project.name}-card`}
                                project={project}
                            />
                        ),
                    )}
                </SimpleGrid>
            </Stack>
        </Center>
    );
};

export const metadata: Metadata = {
    title: "Portfolio - Rudy de Lorenzo",
    description: "Rudy de Lorenzo's Portfolio",
};

export default ProjectsPage;
