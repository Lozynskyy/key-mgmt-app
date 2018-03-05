import queryString from "query-string";

export function updateLocationSearch(paramValue, paramKey, locationSearch)
{
  const parsed = queryString.parse(locationSearch);
  parsed[paramKey] = paramValue;
  const searchString ="?" + queryString.stringify(parsed);
  return searchString;
};