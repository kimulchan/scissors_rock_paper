const objectKeyValueSwap = <
  T extends { [key in K]: V },
  K extends string,
  V extends string
>(
  obj: T
) => {
  let newObj = {} as { [key in V]: K };
  Object.entries<V>(obj).forEach(([key, value]) => {
    newObj[value] = key as K;
  });
  return newObj;
};
