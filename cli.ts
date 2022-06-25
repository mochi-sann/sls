import { sls } from "./src/sls.ts";
import { Command } from "./deps.ts";
const { options, args } = await new Command()
  .name("sls")
  .arguments("[dir]")
  .description("show filelist with sl")
  .version("1.0.0")
  .parse(Deno.args);
// console.log("options ", options, "args", args);
const Dir: string = args[0] || ".";
sls(Dir);
