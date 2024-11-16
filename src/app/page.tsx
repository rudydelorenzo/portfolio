import {
    Center,
    Group,
    Stack,
    Title,
    Text,
    Divider,
    ListItem,
    List,
    Avatar,
    Flex,
    Image,
    Button,
} from "@mantine/core";
import {
    IconBrandDocker,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import { MainPageButtons } from "@/components/MainPageButtons";

export default function Home() {
    return (
        <Center h={"100%"}>
            <Group gap={"5rem"} mb={"5rem"} justify={"center"}>
                <Stack align={"center"} gap={"2rem"}>
                    <Avatar
                        size={"20rem"}
                        radius="100%"
                        component={Flex}
                        style={{
                            backgroundColor: "#C1E7E3",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            src="/avatars/646e4e5dfc37e2ab955ecd03b96ff4f1-sticker.png"
                            alt={"Avatar"}
                            h={"85%"}
                            w={"85%"}
                        />
                    </Avatar>
                    <Group>
                        <Button
                            variant={"subtle"}
                            component={Link}
                            href={
                                "https://www.linkedin.com/in/rodrigo-de-lorenzo/"
                            }
                            target={"_blank"}
                        >
                            <IconBrandLinkedin />
                        </Button>
                        <Button
                            variant={"subtle"}
                            component={Link}
                            href={"https://github.com/rudydelorenzo"}
                            target={"_blank"}
                        >
                            <IconBrandGithub />
                        </Button>
                        <Button
                            variant={"subtle"}
                            component={Link}
                            href={"https://hub.docker.com/u/rdelorenzo"}
                            target={"_blank"}
                        >
                            <IconBrandDocker />
                        </Button>
                        <Button
                            variant={"subtle"}
                            component={Link}
                            href={"mailto:rdelorenzo5@gmail.com"}
                            target={"_blank"}
                        >
                            <IconMail />
                        </Button>
                    </Group>
                </Stack>

                <Stack>
                    <Title>{"Hi! 👋"}</Title>
                    <Text
                        size="4rem"
                        h={"4.5rem"}
                        fw={900}
                        variant="gradient"
                        gradient={{ from: "blue", to: "cyan", deg: 90 }}
                        w={"fit-content"}
                    >
                        {"I'm Rudy"}
                    </Text>
                    <Divider />
                    <Text size="md">
                        {
                            "I'm a BSc student at U of A, full-time software engg, and part-time README writer 📝."
                        }
                    </Text>
                    <Text size="md">
                        {
                            "I love trying out new technologies, so you'll find a bit of everything here:"
                        }
                    </Text>
                    <List withPadding>
                        <ListItem>⚛️ nodeJS + React full stack apps</ListItem>
                        <ListItem>⚙️ JavaScript CLI & Desktop apps</ListItem>
                        <ListItem>☕ Java + JavaFX</ListItem>
                        <ListItem>🤖 Arduino (C++)</ListItem>
                        <ListItem>🎯 PCB Designs</ListItem>
                        <ListItem>🌱 Python, CI, memes, and more!</ListItem>
                    </List>

                    <MainPageButtons />
                </Stack>
            </Group>
        </Center>
    );
}
