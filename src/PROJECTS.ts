import { ProjectType } from "@/types";

const PROJECTS: ProjectType[] = [
    {
        name: "TuneSplit",
        description:
            "A webapp that splits audio files into separate vocal and instrumental tracks",
        image: "tunesplit.png",
        languages: ["node", "py"],
        technologies: ["ML", "Full Stack", "WebSockets"],
    },
] as const;

export default PROJECTS;
