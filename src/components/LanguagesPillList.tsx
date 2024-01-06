import PROJECTS from "@/PROJECTS";
import { ReactNode } from "react";
import { Badge, Group, ScrollArea } from "@mantine/core";
import { LANGUAGE_COLORS } from "@/constants";
import { languageShorthandToFull } from "@/helpers";

export const LanguagesPillList = ({
    languages,
    fwdKey,
}: {
    languages: (typeof PROJECTS)[number]["languages"];
    fwdKey: string;
}): ReactNode => {
    return (
        <ScrollArea scrollbars={"x"} mt={"0"} mb={"md"} type={"never"}>
            <Group gap={"sm"} wrap={"nowrap"}>
                {languages.map((lang) => (
                    <Badge
                        key={`${lang}-tag-${fwdKey}`}
                        color={LANGUAGE_COLORS[lang]}
                    >
                        {languageShorthandToFull(lang)}
                    </Badge>
                ))}
            </Group>
        </ScrollArea>
    );
};
