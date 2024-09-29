import * as functions from "./functions";
import { CommandHandler } from "@/app/cli/internal";

const parseCommand = (command: string): { program: string; args: string[] } => {
    const program = command.split(" ")[0];
    const args = command.split(" ").slice(1);

    return { program: program, args: args };
};

// rsh is the Rudy Shell ;)
export const rsh = (command: string): string => {
    const { program, args } = parseCommand(command);
    try {
        const executable = (functions as Record<string, CommandHandler>)[
            program
        ];
        if (!executable) throw `command not found: ${program}`;
        return executable(args) || "";
    } catch (e) {
        return `rsh: ${e}`;
    }
};
