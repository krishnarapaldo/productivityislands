import { copyFile, mkdir, readdir } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicDir = fileURLToPath(new URL("../public/", import.meta.url));
const supported = new Set([".html", ".css", ".js"]);

await mkdir(publicDir, { recursive: true });

for (const entry of await readdir(root)) {
  if (supported.has(extname(entry))) {
    await copyFile(join(root, entry), join(publicDir, entry));
  }
}
