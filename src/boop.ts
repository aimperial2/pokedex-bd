export function cleanInput(input: string): string[] {
    return input.trim().split(" ").filter(s => s !== "");
}
