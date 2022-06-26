import { sls } from "./src/sls.ts";
import { Command } from "./deps.ts";
const { options, args } = await new Command()
  .name("sls")
  .arguments("[dir]")
  .option("-s, --speed <number>", "set Sl speed", {
    default: 30,
  })
  .description("show filelist with sl")
  .version("1.1.1")
  .parse(Deno.args);
// console.log("options ", options, "args", args);
const Dir: string = args[0] || ".";
console.log({ options });
sls(Dir, options.speed);
