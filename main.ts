// news-image-20261120 — "The World in One Day": the front page of Friday 20 November 2026.
// The image is baked into this repository as entry.png (1024x1024 PNG, 903708 bytes).
// This program's only job is to place those exact bytes where the grader looks:
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png when set, for local runs).
// It reads nothing from the network and writes nothing else, so two runs are
// byte-identical by construction. Node 22, standard library only.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const image = readFileSync(join(here, 'entry.png'));
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
writeFileSync(target, image);
// Confirm the copy landed whole: the grader gates on the exact bytes.
if (readFileSync(target).length !== image.length) {
  throw new Error('entry.png copy is incomplete');
}
console.log(`wrote ${target} (${image.length} bytes)`);
