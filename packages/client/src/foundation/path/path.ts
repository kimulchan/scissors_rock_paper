export const clientPath = {
  main: () => "/" as const,
  join: () => "/join" as const,
  field: (roomId?: string) => `/field/${roomId}` as const,
  replay: (roomId?: string) => `/replay/${roomId}` as const,
  create: () => "/create",
} as const;
