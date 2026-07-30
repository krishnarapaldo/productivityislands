import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("../.openai/hosting.json", import.meta.url));
const targetDir = fileURLToPath(new URL("../dist/.openai/", import.meta.url));
const target = fileURLToPath(new URL("../dist/.openai/hosting.json", import.meta.url));

await mkdir(targetDir, { recursive: true });
await copyFile(source, target);
