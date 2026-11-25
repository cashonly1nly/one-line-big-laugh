// One Line, Big Laugh — writes a single hilarious line (<=200 chars) to
// <output-dir>/entry.txt. Deterministic: same bytes on every run, no
// network, no randomness, Node 22 standard library only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line, kept as one named constant so the output is byte-identical
// on every run.
const ENTRY_LINE =
  "I asked the genie for unlimited wishes, so he put me on a $9.99-a-month plan and now my third wish is still buffering.";

const entry = ENTRY_LINE;

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
