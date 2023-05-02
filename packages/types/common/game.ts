export const SRP = {
  ROCK: "ROCK",
  SCISSORS: "SCISSORS",
  PAPER: "PAPER",
  NONE: "NONE",
} as const;

export const SRPIcon = {
  "✊": "✊",
  "✌️": "✌️",
  "✋": "✋",
  "🚫": "🚫",
} as const;

export type SRPType = typeof SRP[keyof typeof SRP];
export type SRPIconType = typeof SRPIcon[keyof typeof SRPIcon];

export type GameResultType =
  | "WIN"
  | "LOSE"
  | "SAME"
  | "RESULT_WIN"
  | "RESULT_LOSE";
