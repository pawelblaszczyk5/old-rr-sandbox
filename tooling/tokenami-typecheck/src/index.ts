import { readFile, writeFile } from "node:fs/promises";
import { $ } from "zx";

$.verbose = true;

const configPath = ".tokenami/tokenami.config.ts";

const originalFile = await readFile(configPath, { encoding: "utf8" });
const modifiedFile = originalFile.replace("CI: false", "CI: true");

await writeFile(configPath, modifiedFile);

const exitCode = await $`tsc --build --noEmit`.exitCode;

await writeFile(configPath, originalFile);

process.exit(exitCode);
