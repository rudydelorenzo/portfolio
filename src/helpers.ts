import PROJECTS from "@/PROJECTS";
import { LANGUAGES } from "@/constants";

type LanguageFieldType = (typeof PROJECTS)[number]["languages"];

export const languageShorthandToFull = <T extends LanguageFieldType[number]>(
    shortLanguage: T,
): (typeof LANGUAGES)[T] => {
    return LANGUAGES[shortLanguage];
};
