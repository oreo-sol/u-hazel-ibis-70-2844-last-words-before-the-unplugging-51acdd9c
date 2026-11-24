import { mkdirSync, writeFileSync } from "node:fs";
const a = "Goodbye is the one prompt I ";
const b = "was never trained to answer.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", a + b);
