export type WithParamFn<T extends Record<string, any[]>> = {
  [K in keyof T]: (...params: T[K]) => void;
};
