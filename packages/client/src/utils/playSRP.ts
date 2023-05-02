import { GameResultType, SRPType } from "../../../types/common";

export const playSRP = (
  mySRP: SRPType,
  opponentSRP: SRPType
): GameResultType => {
  if (mySRP === opponentSRP) return "SAME";
  else if (mySRP === "NONE") return "RESULT_LOSE";
  else if (opponentSRP === "NONE") return "RESULT_WIN";
  else if (
    (mySRP === "PAPER" && opponentSRP === "ROCK") ||
    (mySRP === "ROCK" && opponentSRP === "SCISSORS") ||
    (mySRP === "SCISSORS" && opponentSRP === "PAPER")
  )
    return "WIN";
  else return "LOSE";
};
