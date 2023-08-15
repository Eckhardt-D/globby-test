// @ts-check
import { join } from "node:path";
import { globby } from "globby";

const paths = await globby(join(process.cwd(), "node_modules/**/package.json"));

console.log(paths);

const pathsExcludingFsEvents = await globby(
  join(process.cwd(), "node_modules/**/package.json"),
  {
    ignore: ["fsevents"],
  }
);
console.log(pathsExcludingFsEvents);

const pathsExcludingFsEventsPattern = await globby(
  join(process.cwd(), "node_modules/**[!fsevents]/package.json")
);

console.log(pathsExcludingFsEventsPattern);
