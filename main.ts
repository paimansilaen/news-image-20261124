// Entry program for news-image-20261124 (Node 22, standard library only).
//
// The entry image is bundled in this repository as entry.png. All this
// program does is place an exact copy of it at the grader's output path,
// so both grading runs produce byte-identical files.
//
// The output directory comes from MAKEFUN_OUTPUT_DIR when set; otherwise
// the program writes to /output, the directory the grader provides.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const OUTPUT_PATH = join(OUTPUT_DIR, 'entry.png');

// The image lives next to this file in the repository snapshot.
const SOURCE_PATH = fileURLToPath(new URL('./entry.png', import.meta.url));

// Fail loudly instead of silently producing no output if the image is missing.
if (!existsSync(SOURCE_PATH)) {
  throw new Error(`entry image not found next to main.ts: ${SOURCE_PATH}`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
copyFileSync(SOURCE_PATH, OUTPUT_PATH);
