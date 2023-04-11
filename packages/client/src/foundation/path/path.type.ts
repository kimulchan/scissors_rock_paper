import { clientPath } from "./path";

export type PathType = ReturnType<typeof clientPath[keyof typeof clientPath]>;
