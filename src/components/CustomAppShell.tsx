"use client";

import {
    AppShell,
    AppShellHeader,
    AppShellMain,
    AppShellNavbar,
    Burger,
    Center,
    Flex,
    Group,
    UnstyledButton,
} from "@mantine/core";
import { IconAugmentedReality } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { ReactNode } from "react";
import { NavigationButton } from "@/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter } from "next/navigation";
import { ScrollableContainer } from "@/components/ScrollableContainer";

const BUTTONS: NavigationButton[] = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About me" },
] as const;

const getButtons = (
    buttons: NavigationButton[],
    router: AppRouterInstance,
    currentURL?: string,
    key: string = "key",
): ReactNode => {
    return buttons.map((button) => (
        <UnstyledButton
            key={`${button.label}-navbar-button-${key}`}
            className={classes.control}
            style={currentURL === button.href ? { color: "blue" } : undefined}
            onClick={() => router.push(button.href)}
        >
            {button.label}
        </UnstyledButton>
    ));
};

export const CustomAppShell = ({ children }: { children: ReactNode }) => {
    const [opened, { toggle }] = useDisclosure();
    const router = useRouter();
    const currentURL = usePathname();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { desktop: true, mobile: !opened },
            }}
            padding={"md"}
        >
            <AppShellHeader>
                <Group h="100%" px="md">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <IconAugmentedReality size={30} />
                        <Group ml="xl" gap={0} visibleFrom="sm">
                            {getButtons(BUTTONS, router, currentURL, "header")}
                        </Group>
                    </Group>
                </Group>
            </AppShellHeader>
            <AppShellNavbar py="md" px={4}>
                {getButtons(BUTTONS, router, currentURL, "sidebar")}
            </AppShellNavbar>
            <AppShellMain component={Flex}>
                <ScrollableContainer>{children}</ScrollableContainer>
            </AppShellMain>
        </AppShell>
    );
};
