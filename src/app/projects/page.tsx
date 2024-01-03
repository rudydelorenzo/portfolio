import {
    Badge,
    Button,
    Card,
    CardSection,
    Center,
    Group,
    Image,
    SimpleGrid,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import PROJECTS from "@/PROJECTS";
import { ReactNode } from "react";
import NextImage from "next/image";
import TSP from "../../../public/tunesplit.png";

const ProjectsPage = () => {
    return (
        <Center h={"100%"}>
            <Stack>
                <Title>Projects</Title>

                <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }}>
                    {PROJECTS.map((project): ReactNode => {
                        return (
                            <Card
                                key={project.name}
                                shadow="sm"
                                padding="lg"
                                radius="md"
                                withBorder
                            >
                                <CardSection>
                                    <Image
                                        // component={NextImage}
                                        src={
                                            "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                        }
                                        height={160}
                                        alt="Norway"
                                    />
                                </CardSection>

                                <Group justify="space-between" mt="md" mb="xs">
                                    <Text fw={500}>
                                        Norway Fjord Adventures
                                    </Text>
                                    <Badge color="pink">On Sale</Badge>
                                </Group>

                                <Text size="sm" c="dimmed">
                                    With Fjord Tours you can explore more of the
                                    magical fjord landscapes with tours and
                                    activities on and around the fjords of
                                    Norway
                                </Text>

                                <Button
                                    color="blue"
                                    fullWidth
                                    mt="md"
                                    radius="md"
                                >
                                    Book classic tour now
                                </Button>
                            </Card>
                        );
                    })}
                </SimpleGrid>
            </Stack>
        </Center>
    );
};

export default ProjectsPage;
