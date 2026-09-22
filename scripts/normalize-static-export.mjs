// Next 16.3 Windows static exports may retain path separators in segment names.
// https://github.com/vercel/next.js/issues/92339
// Preserve the original generated files; add only the flat names the client requests.
import { readdir, readFile, copyFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../out/", import.meta.url));
let added = 0;

async function flatten(directory, parent, segments) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const source = join(directory, entry.name);
    const parts = [...segments, entry.name];
    if (entry.isDirectory()) await flatten(source, parent, parts);
    else if (entry.isFile() && entry.name.endsWith(".txt")) {
      const target = join(parent, parts.join("."));
      const original = await readFile(source);
      let existing;
      try { existing = await readFile(target); }
      catch (error) { if (error.code !== "ENOENT") throw error; }
      if (existing && !existing.equals(original)) throw new Error(`Conflicting generated segment: ${target}`);
      if (!existing) { await copyFile(source, target); added++; }
    }
  }
}

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === "_next") continue;
    const child = join(directory, entry.name);
    if (entry.name.startsWith("__next.")) await flatten(child, directory, [entry.name]);
    else await visit(child);
  }
}

await visit(root);
console.log(`Static export segment aliases added: ${added}`);
