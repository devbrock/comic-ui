/**
 * Copy the library base stylesheet into `dist/` so consumers can import:
 * `@devbrock/comic-ui/styles.css`
 *
 * This keeps documentation and published artifacts aligned.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "..");
const src = path.resolve(repoRoot, "styles.css");
const outDir = path.resolve(repoRoot, "dist");
const dest = path.resolve(outDir, "styles.css");

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(src, dest);

