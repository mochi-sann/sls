import { DreawSLs } from "./src/sls.ts";
import { ReadDirFile } from "./src/lib/ReadDir.ts";
import { FileFormat } from "./src/lib/fileFormat.ts";
import { ChooesFileName } from "./src/lib/chooseFileName.ts";
import { Command } from "./deps.ts";
const { options, args } = await new Command()
  .name("sls")
  .arguments("[dir]")
  .option("-s, --speed <number>", "set Sl speed", {
    default: 30,
  })
  .option("-l --loop <boolean>", "loop sl", { default: false })
  .description("show filelist with sl")
  .version("1.1.1")
  .parse(Deno.args);

console.log({ options, args });
const main = async () => {
  const Dir: string = args[0] || ".";
  const Dirfiles = await ReadDirFile(Dir);
  const files = ChooesFileName(Dirfiles);
};
