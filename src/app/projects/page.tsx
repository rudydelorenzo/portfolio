import { Center, SimpleGrid, Stack, Title } from "@mantine/core";
import PROJECTS from "@/PROJECTS";
import { ReactNode } from "react";
import { ProjectCard } from "@/components/ProjectCard";

const ProjectsPage = () => {
    return (
        <Center h={"100%"}>
            <Stack w={"90%"} maw={"1500px"}>
                <Title>Projects</Title>

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

export default ProjectsPage;
