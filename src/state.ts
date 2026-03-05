//holds CLICommands
import { createInterface, type Interface } from "readline";
import type { CLICommand } from "./command.js";
import {commandHelp} from "./command_help.js";
import {commandExit} from "./command_exit.js";

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
};

export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const commands: Record<string, CLICommand> = {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
    };
    return { rl, commands };
}