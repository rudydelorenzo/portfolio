import { MantineColor } from "@mantine/core";

export const LANGUAGES = {
    ts: "TypeScript",
    js: "JavaScript",
    py: "Python",
    java: "Java",
    c: "C",
    cpp: "C++",
    html: "HTML",
    css: "CSS",
    other: "Other",
} as const;

export const LANGUAGE_COLORS: { [k in keyof typeof LANGUAGES]: MantineColor } =
    {
        ts: "blue",
        js: "#f0db4e",
        py: "orange",
        java: "red",
        c: "gray",
        cpp: "purple",
        html: "#ef672b",
        css: "#2eaade",
        other: "black",
    };
