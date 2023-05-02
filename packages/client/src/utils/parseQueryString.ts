const parseQueryString = <T extends {}>(queryString: string) => {
  let query = {} as any;
  let pairs = (
    queryString[0] === "?" ? queryString.slice(1) : queryString
  ).split("&");
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query as T;
};

export default parseQueryString;
