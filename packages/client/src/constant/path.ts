const path = {
  index: "/",
  test: () => `${path.index}/test`,
  wait: (roomId?: string) => `${path.index}/room/${roomId || ":roomId"}/wait`,
} as const;
