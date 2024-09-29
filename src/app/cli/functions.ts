import { useEnv } from "@/app/cli/envStore";
import { structure } from "@/app/cli/structure";
import {
    buildPathFromArray,
    CommandHandler,
    computeAccessorChain,
    getAtPath,
    isDir,
} from "@/app/cli/internal";
import { PATH_SEPARATOR } from "@/app/cli/constants";

/* `rsh` conventions:
 * if you 'return', that's interpreted to mean successful execution of the program
 * if you 'throw', that's interpreted to mean unsuccessful termination of the program
 * only throw `string`s or an object that provides a `toString()` method
 */

export const ls: CommandHandler = (args: string[] = ["."]) => {
    if (args.length > 1) return `expected 0-1 arguments, got ${args.length}`;

    const env = useEnv.getState();
    const fullPath = computeAccessorChain([...env.getPwd(), ...args]);

    const dir = getAtPath(structure, fullPath);

    if (!isDir(dir)) throw `not a directory: ${fullPath[fullPath.length - 1]}`;

    return `${Object.keys(dir).join("\t\t")}`;
};

export const cd: CommandHandler = (args: string[]) => {
    const env = useEnv.getState();

    if (args.length !== 1) throw `expected 1 argument, got ${args.length}`;

    const path = args[0].split(PATH_SEPARATOR);

    const absolute = path[0] === "";

    // if the path is absolute the first element will be empty, so we remove it
    if (absolute) path.shift();

    const fullPath = absolute ? [...path] : [...env.getPwd(), ...path];

    const accessors = computeAccessorChain(fullPath);

    const contentAtPath = getAtPath(structure, accessors);

    if (!contentAtPath || typeof contentAtPath === "string") {
        throw `path ${accessors.join(PATH_SEPARATOR)} is not a directory`;
    }

    env.setPwd(accessors);
    return `access_chain: ${accessors}; CHANGED PWD TO = ${env.getPwd()}`;
};

export const cat: CommandHandler = (args: string[]) => {
    if (args.length !== 1) throw `expected 1 argument, got ${args.length}`;
    const pwd = useEnv.getState().getPwd();

    const path = args[0].split(PATH_SEPARATOR);
    const fullPath = computeAccessorChain([...pwd, ...path]);

    const contents = getAtPath(structure, fullPath);

    if (!isDir(contents)) return contents;
};

export const pwd: CommandHandler = (args: string[]) => {
    if (args.length !== 0) throw `expected 0 arguments, got ${args.length}`;
    return buildPathFromArray(useEnv.getState().getPwd(), true);
};
