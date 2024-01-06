import { Group, Text, Tooltip } from "@mantine/core";
import { IconGitFork, IconStar } from "@tabler/icons-react";
import {
    GithubInfoRequestBody,
    GithubInfoResponseBody,
    ProjectType,
} from "@/types";
import { ComponentProps, ReactNode, useEffect, useState } from "react";

export const StarsAndForks = ({
    githubURL,
    ...rest
}: {
    githubURL: ProjectType["github"];
} & ComponentProps<typeof Group>): ReactNode => {
    const [stars, setStars] = useState<number>(0);
    const [forks, setForks] = useState<number>(0);

    useEffect(() => {
        (async () => {
            if (!githubURL) return;

            const regex = /\/([^\/]+)\/([^\/]+)$/;

            const [, owner, repo] = githubURL.match(regex) || [];

            const body: GithubInfoRequestBody = {
                owner,
                repo,
            };

            const res = await fetch("/api/github", {
                method: "POST",
                body: JSON.stringify(body),
            });

            const { stars, forks }: GithubInfoResponseBody = await res.json();

            setStars(stars);
            setForks(forks);
        })();
    }, [githubURL]);

    if (!githubURL || (stars === 0 && forks === 0)) return;

    return (
        <Group {...rest}>
            {stars > 0 && (
                <Tooltip
                    label={`${stars} ${
                        stars === 1 ? "star" : "stars"
                    } on GitHub`}
                    transitionProps={{ transition: "pop", duration: 300 }}
                    position={"bottom"}
                    withArrow
                >
                    <Group gap={5} style={{ cursor: "default" }}>
                        <IconStar size={16} />
                        <Text c={"dimmed"} size={"sm"}>
                            {stars}
                        </Text>
                    </Group>
                </Tooltip>
            )}
            {forks > 0 && (
                <Tooltip
                    label={`${forks} ${
                        stars === 1 ? "fork" : "forks"
                    } on GitHub`}
                    transitionProps={{ transition: "pop", duration: 300 }}
                    position={"bottom"}
                    withArrow
                >
                    <Group gap={5} style={{ cursor: "default" }}>
                        <IconGitFork size={16} />
                        <Text c={"dimmed"} size={"sm"}>
                            {forks}
                        </Text>
                    </Group>
                </Tooltip>
            )}
        </Group>
    );
};
