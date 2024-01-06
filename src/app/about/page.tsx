import { Center, Group, Stack, Text, Title } from "@mantine/core";
import { IconBackhoe } from "@tabler/icons-react";

const AboutPage = () => {
    return (
        <Center h={"100%"}>
            <Group gap={"lg"}>
                <IconBackhoe size={"6rem"} />
                <Stack gap={0}>
                    <Title>Under construction</Title>
                    <Text>Please check back later!</Text>
                </Stack>
            </Group>
        </Center>
    );
};

export default AboutPage;
