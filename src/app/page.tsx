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
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Home() {
    return (
        <Center h={"100%"}>
            <Group gap={"5rem"}>
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
                <Stack>
                    <Title>{"Hi! 👋"}</Title>
                    <Text
                        size="4rem"
                        h={"4.5rem"}
                        fw={900}
                        variant="gradient"
                        gradient={{ from: "blue", to: "cyan", deg: 90 }}
                    >
                        {"I'm Rudy"}
                    </Text>
                    <Divider />
                    <Text size="md">
                        {
                            "I'm a BSc student at U of A, full-time software engg, and part-time README writer 📝"
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
                        <ListItem>🌱 Python, PHP, memes, and more!</ListItem>
                    </List>

                    <Group my={"1rem"} justify={"space-between"}>
                        <Group>
                            <Button variant={"outline"}>View my work</Button>
                            <Button>About me</Button>
                        </Group>

                        <Group>
                            <Button variant={"subtle"}>
                                <IconBrandLinkedin />
                            </Button>
                            <Button variant={"subtle"}>
                                <IconBrandGithub />
                            </Button>
                            <Button variant={"subtle"}>
                                <IconBrandInstagram />
                            </Button>
                        </Group>
                    </Group>
                </Stack>
            </Group>
        </Center>
    );
}
