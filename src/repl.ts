import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(" ").filter(s => s !== "");
}

export function startREPL(state: State) {
  state.rl.prompt();

  state.rl.on("line", (line) => {
    const words = cleanInput(line);
    if (words.length === 0) {
      state.rl.prompt();
      return;
    }
    const cmd = state.commands[words[0]];
    if (!cmd) {
      console.log("Unknown command");
    } else {
      try {
        cmd.callback(state);
      } catch (e) {
        console.log(e);
      }
    }
    state.rl.prompt();
  });
}
