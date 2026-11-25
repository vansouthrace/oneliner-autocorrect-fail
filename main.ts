// Funniest Autocorrect Fail
// Writes a single one-line autocorrect fail (1 to 199 characters)
// to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I just emailed the whole company 'please find the attached orgasm' instead of 'organogram' and IT has locked my account.";

if (entry.length < 1 || entry.length > 199) {
  throw new Error(`entry must be 1-199 characters, got ${entry.length}`);
}

if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
