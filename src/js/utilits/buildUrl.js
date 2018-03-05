import queryString from "query-string";

export function buildUrl(pageNumber, pageName, locationSearch)
{
  const parsed = queryString.parse(locationSearch);
  parsed[pageName] = pageNumber;
  const searchString ="?" + queryString.stringify(parsed);
  return searchString;
};