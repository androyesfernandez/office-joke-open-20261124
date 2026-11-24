// The Office Joke Open — one office joke, 195 characters, no trailing newline.
// A single scene carried to the end: the icebreaker, "I like my job", a room
// quieter than the layoffs meeting, and HR calling it great energy. The second
// beat lands in the last words, so the whole line reads cleanly in one pass.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "At the team icebreaker they asked for a fun fact about myself, so I said I like my job, and the room went quieter than the layoffs meeting, which HR later described as great energy in the survey.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
