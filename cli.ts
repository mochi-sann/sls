import { DreawSLs } from "./src/sls.ts";
import { ReadDirFile } from "./src/lib/ReadDir.ts";
import { getColumns, getLines } from "./src/lib/process.ts";
import { Command, sleep } from "./deps.ts";
const { options, args } = await new Command()
  .name("sls")
  .arguments("[dir]")
  .option("-s, --speed <number>", "set Sl speed", {
    default: 30,
  })
  .option("-l --loop ", "loop sl")
  .description("show filelist with sl")
  .version("1.1.1")
  .parse(Deno.args);

const Speed: number = options.speed;

const main = async () => {
  const Windowsize = {
    lines: await getLines(),
    collums: await getColumns(),
  };
  let frames: number = 0;
  const Dir: string = args[0] || ".";
  const Dirfiles = await ReadDirFile(Dir);
  while (true) {
    const files = Dirfiles.map((value) => value.name);
    const Sl = DreawSLs({
      files: files,
      frame: frames,
      Windowsize: Windowsize,
    });
    console.clear();
    // console.log({ hoge: Dirfiles.map((value) => value.name), Dirfiles });
    frames > 0 && console.log(Sl.slText);
    // console.log(Sl.slText);
    await sleep(1 / Speed);
    if (!Sl.isShowSl && options.loop) {
      frames = 0;
    } else if (!Sl.isShowSl && !options.loop) {
      break;
    }
    frames++;
  }
};
main();
