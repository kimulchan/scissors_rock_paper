import { SRPType } from "../common";

export type CreateRoomDto = [(randomId: string) => void];
// roomId, done
export type JoinRoomDto = [string, () => void];

export type OnJoinRoomDto = [void];
//roomId, gameValue, done
export type PlaySRPDto = [string, SRPType, (value: SRPType) => void];
//
export type OnPlaySRPDto = [SRPType];

export type IsRetryDto = [boolean, () => void];

export type OnIsRetryDto = [void];
