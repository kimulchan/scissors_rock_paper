type ColorKeyType = "black" | "white" | "red" | "main";

type ColorType = Record<ColorKeyType, `#${string}`>;
