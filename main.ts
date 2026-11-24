import * as fs from "node:fs";

const entry = "I texted my boss \"I love you\" instead of \"I'll see you\" and now my performance review has a whole new section.";

fs.mkdirSync("/output", {recursive: true});
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
