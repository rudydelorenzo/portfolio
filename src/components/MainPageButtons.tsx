"use client";

import { Button, Group } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export const MainPageButtons = () => {
    const router = useRouter();

    return (
        <Group my={"1rem"} justify={"space-between"}>
            <Group>
                <Button
                    leftSection={<IconSearch />}
                    size={"md"}
                    onClick={() => router.push("/projects")}
                >
                    View my work
                </Button>
                <Button
                    variant={"outline"}
                    size={"md"}
                    onClick={() => router.push("/about")}
                >
                    About me
                </Button>
            </Group>
        </Group>
    );
};
