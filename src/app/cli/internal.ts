import {
    ContentsOfPathType,
    FilesystemStructureType,
} from "@/app/cli/structure";
import { PATH_SEPARATOR } from "@/app/cli/constants";

export type CommandHandler = (args: string[]) => string | void;

export const isDir = (
    contents: ContentsOfPathType,
): contents is FilesystemStructureType => {
    if (typeof contents === "object") return true;
    return false;
};

export const getAtPath = (
    dirStructure: ContentsOfPathType,
    path: readonly string[],
): ContentsOfPathType => {
    const copiedPath = [...path];
    const dir = copiedPath.shift();
    if (typeof dir === "undefined") return dirStructure;
    else {
        if (!isDir(dirStructure)) {
            console.log("throwing immediately");
            throw `not a directory: ${dir}`;
        } else {
            const nextDir = dirStructure[dir];
            console.log("nextDir path", dir);
            console.log(nextDir);
            if (!nextDir) throw `no such file or directory: ${dir}`;
            return getAtPath(nextDir, copiedPath);
        }
    }
};

export const computeAccessorChain = (path: readonly string[]): string[] => {
    const accessors: string[] = [];
    for (const dir of path) {
        if (dir === "..") {
            accessors.pop();
        } else if (dir === ".") {
            // noop
        } else {
            accessors.push(dir);
        }
    }
    return accessors;
};

export const buildPathFromArray = (
    path: string[],
    absolute = false,
): string => {
    const pathString = path.join(PATH_SEPARATOR);
    return absolute ? PATH_SEPARATOR.concat(pathString) : pathString;
};
