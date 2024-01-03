"use client";

import { Button, Center, Title } from "@mantine/core";
import { useRouter } from "next/navigation";

const ViewProjectPage = ({ params }: { params: { name: string } }) => {
    const router = useRouter();

    return (
        <Center>
            <Title>{params.name}</Title>
            <Button onClick={() => router.push(`/project/${params.name + 1}`)}>
                Next
            </Button>
        </Center>
    );
};

export default ViewProjectPage;
