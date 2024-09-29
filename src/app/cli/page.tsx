"use client";

import { Center, Input, Stack, Textarea } from "@mantine/core";
import { ChangeEvent, useState, KeyboardEvent, useRef, useEffect } from "react";
import { rsh } from "@/app/cli/rsh";

const CLIPage = () => {
    const [tty, setTty] = useState<string>("");
    const [input, setInput] = useState<string>("");
    const [disableInput, setDisableInput] = useState<boolean>(false);
    const outputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (outputRef.current)
            outputRef.current.scrollTop = outputRef.current?.scrollHeight;
    }, [tty]);

    const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        // not called on enter key, since it causes no change
        if (!disableInput) {
            const newInputText = e.target.value;
            setInput(newInputText);
        }
    };

    const keyDownListener = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setDisableInput(true);
            submitCommand(input);
            setDisableInput(false);
            setInput("");
        }
    };

    const submitCommand = (command: string): void => {
        const result = rsh(command);
        console.log(result);
        setTty(tty.concat(`${result}\n`));
    };

    return (
        <Center h={"100%"}>
            <Stack w={"90%"} maw={"1500px"}>
                <Textarea
                    ref={outputRef}
                    value={tty}
                    readOnly={true}
                    rows={20}
                    styles={{
                        input: { fontFamily: "monospace" },
                    }}
                />
                <Input
                    type={"text"}
                    value={input}
                    onChange={handleInputOnChange}
                    onKeyDown={keyDownListener}
                    styles={{
                        input: { fontFamily: "monospace" },
                    }}
                />
            </Stack>
        </Center>
    );
};

// export const metadata: Metadata = {
//     title: "Portfolio - Rudy de Lorenzo",
//     description: "Rudy de Lorenzo's Portfolio",
// };

export default CLIPage;
