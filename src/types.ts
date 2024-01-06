import { LANGUAGES } from "@/constants";

export type LanguagesType = keyof typeof LANGUAGES;

export type ProjectType = {
    name: string;
    description: string;
    url?: string;
    github?: string;
    image: string;
    languages: LanguagesType[];
    technologies: string[];
};

export type NavigationButton = {
    href: string;
    label: string;
};

export type GithubInfoRequestBody = { owner: string; repo: string };

export type GithubInfoResponseBody = { stars: number; forks: number };
