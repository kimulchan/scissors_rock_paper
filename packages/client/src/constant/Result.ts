import { GameResultType } from "../../../types/common";

export const ResultToKor: Record<GameResultType, string> = {
  WIN: "승리",
  LOSE: "패배",
  RESULT_LOSE: "판정패",
  RESULT_WIN: "판정승",
  SAME: "무승부",
};
