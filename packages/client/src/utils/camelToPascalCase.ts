export type CamelToPascalCase<S extends string> =
  S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : S;

export const camelToPascalCase = <S extends string>(
  str: S
): CamelToPascalCase<S> => {
  const splitStr = str.split("");
  return `${splitStr[0].toUpperCase()}${splitStr
    .slice(1)
    .join("")}` as CamelToPascalCase<S>;
};
