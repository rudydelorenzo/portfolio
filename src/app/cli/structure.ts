import PROJECTS from "@/PROJECTS";
import { ProjectType } from "@/types";

export interface FilesystemStructureType {
    [key: string]: ContentsOfPathType;
}

export type ContentsOfPathType = string | FilesystemStructureType;

const getAsciiFromImage = async (
    img: ProjectType["image"],
): Promise<string> => {
    return "[ASCIIFIED IMAGE GOES HERE]";
};

const getProjectsFileStructure = (
    projects: ProjectType[],
): FilesystemStructureType => {
    const getTextFromProject = (proj: ProjectType): string => {
        let text: string = "";

        const imgAscii = getAsciiFromImage(proj.image).then((data) => data);

        text += imgAscii + "\n";
        text += `# ${proj.name}\n\n`;
        text += `## Using: ${proj.languages.join(", ")}`;

        return text;
    };
    const result: FilesystemStructureType = {};
    for (const project of projects) {
        result[`${project.name}.md`] = getTextFromProject(project);
    }

    return result;
};

export const structure: FilesystemStructureType = {
    projects: getProjectsFileStructure(PROJECTS),
    experience: {
        Chegg: {
            "technologies.md": "# i used react and python lol",
        },
    },
} as const;
