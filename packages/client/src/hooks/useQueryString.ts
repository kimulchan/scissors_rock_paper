import { useLocation } from "react-router-dom";
import parseQueryString from "../utils/parseQueryString";

const useQueryString = <T extends {} = {}>() => {
  const { search } = useLocation();
  const queryObject = parseQueryString<T>(search);
  return queryObject;
};

export default useQueryString;
