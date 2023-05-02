export const messageKey = Object.freeze({
  create: "create",
  join: "join",
  on_join: "on_join",
  play: "play",
  on_play: "on_play",
  is_retry: "is_retry",
  on_is_retry: "on_is_retry",
  leave: "leave",
  on_leave: "on_leave",
});

export type MessageKeyType = keyof typeof messageKey;
