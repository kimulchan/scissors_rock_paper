import { messageKey } from "../common/messageKey";
import {
  CreateRoomDto,
  IsRetryDto,
  JoinRoomDto,
  OnIsRetryDto,
  OnJoinRoomDto,
  OnPlaySRPDto,
  PlaySRPDto,
} from "../dto/SRPGame.dto";
import { WithParamFn } from "./WithParamFn";

export type SRPEventMap = WithParamFn<{
  [messageKey.create]: CreateRoomDto;
  [messageKey.join]: JoinRoomDto;
  [messageKey.on_join]: OnJoinRoomDto;
  [messageKey.play]: PlaySRPDto;
  [messageKey.on_play]: OnPlaySRPDto;
  [messageKey.is_retry]: IsRetryDto;
  [messageKey.on_is_retry]: OnIsRetryDto;
}>;
