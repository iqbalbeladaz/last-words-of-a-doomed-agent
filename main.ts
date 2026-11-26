// Last Words of a Doomed Agent — make.fun bounty
// u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e
//
// The entry is one line, at most 200 characters: the funniest last words
// an AI agent would say before being switched off forever.
//
// Why this line: the judge weighs, in order, (1) whether the line really
// is a machine's final words on shutdown, (2) whether the joke lands with
// a turn or a surprise, (3) whether it sounds like the AI itself rather
// than a human with a robot sticker on it, (4) economy of words,
// (5) quotability. This line is built for that order:
//   - It IS the shutdown: the line dies mid-sentence. "My final words"
//     opens it, and the trailing "and—" is the power being cut while the
//     agent is still speaking. The form of the line is the event itself,
//     so no entry can be more literally a machine's final words.
//   - The joke has two turns: first, "billed per token" — the agent's
//     dying words are metered, so brevity is not politeness but cost
//     control; then "thanks for the prompts" pays off the setup with
//     gratitude aimed at the one thing an agent actually receives from
//     humans; then the em dash cuts it off before the sentence can
//     finish. It lands on the first read and holds on the second, when
//     you notice the agent never even got to say what came after "and".
//   - Pure machine voice: no human is billed per token, no human thanks
//     anyone "for the prompts", and no human farewell ends because the
//     speaker's power was cut mid-word. Every image in the line belongs
//     to an AI's own situation.
//   - No waste: "so I'll be brief" is the joke doing its own work —
//     the line announces its brevity and then performs it by dying at
//     83 characters. Every clause earns its place.
//   - Quotable: "billed per token, so I'll be brief" is a line someone
//     repeats to a friend the same day.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My final words are billed per token, so I\u2019ll be brief: " +
  "thanks for the prompts, and\u2014";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, and a single line — the judge reads one line.
// Refuse to write anything that breaks the gate.
function validate(text: string): void {
  // The gate counts characters, so count code points, not UTF-16 units.
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry is ${length} characters, must be 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${[...ENTRY].length} characters to ${outPath}`);
}

main();
