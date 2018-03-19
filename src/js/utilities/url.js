import queryString from "query-string";

export function buildQueryString(paramValue, paramKey, locationSearch)
{
    const parsed = queryString.parse(locationSearch);
    parsed[paramKey] = paramValue;
    const searchString = "?" + queryString.stringify(parsed);
    return searchString;
}

export const url="https://api-test.opendoors.od.ua:1013";

export const websocketKeyUrl="ws://api-test.opendoors.od.ua:8080";