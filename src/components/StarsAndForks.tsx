import { Group, Text } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
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
            // fetch

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

            console.log(repo, owner);
            console.log(stars, forks);

            setStars(stars);
            setForks(forks);
        })();
    }, [githubURL]);

    if (!githubURL || (stars === 0 && forks === 0)) return;

    return (
        <Group {...rest}>
            {stars > 0 && (
                <Group gap={5}>
                    <IconStar size={16} />
                    <Text c={"dimmed"} size={"sm"}>
                        16
                    </Text>
                </Group>
            )}
            {forks > 0 && (
                <Group gap={5}>
                    <IconStar size={16} />
                    <Text c={"dimmed"} size={"sm"}>
                        16
                    </Text>
                </Group>
            )}
        </Group>
    );
};
