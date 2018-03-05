import queryString from "query-string";

export function buildQueryString(paramValue, paramKey, locationSearch)
{
  const parsed = queryString.parse(locationSearch);
  parsed[paramKey] = paramValue;
  const searchString = "?" + queryString.stringify(parsed);
  return searchString;
};