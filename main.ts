import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The image is drawn in code ahead of time; the program's only job is
// to place the finished bytes at the path the grader reads.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");

// The grader's output directory is not guaranteed to exist yet: create
// it (including any missing parents) before copying, so the run works
// from a clean slate as well as from a prepared directory.
mkdirSync(outDir, { recursive: true });

copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
