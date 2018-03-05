import { queryString } from "query-string";
import { history } from "../configurateStore/history";

function changePage(pageNumber, pageName, locationSearch)
{
  const queryString = require("query-string");
  const parsed = queryString.parse(locationSearch);
  let pageN = pageNumber;
  console.log(pageN);
  console.log(parsed);
  parsed.window[pageName] == 2;
  console.log(parsed);
  const searchString = queryString.stringify(parsed);
  history.push("?" + searchString);
  console.log(parsed);
}

export {changePage};