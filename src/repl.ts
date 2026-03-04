export function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().split(" ").filter(s => s !== "");

}

import { read } from "fs";
import * as readline from "readline";

export function startREPL() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: " Pokedex > ",
    })

    rl.prompt();

    rl.on("line", (line) => {
        const words = cleanInput(line);
        if (words.length === 0) {
            rl.prompt();
            return;
        }
        console.log(`Your command was: ${words[0]}`);
        rl.prompt();
    });
}