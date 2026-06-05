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
  .option("-r, --reverse", "reverse Sl ")
  .option("-l --loop ", "loop sl")
  .option("--startFromLeft ", "sl start from Left")
  .description("show filelist with sl")
  .version("1.1.1")
  .parse(Deno.args);

const Speed: number = options.speed;
const reverse: boolean = options.reverse || false;
const StartFromLeft: boolean = options.startFromLeft || false;

const main = async () => {
  let frames: number = 0;
  const Dir: string = args[0] || ".";
  const Dirfiles = await ReadDirFile(Dir);
  // ファイル一覧はアニメーション中に変化しないのでループ外で一度だけ生成する
  const files = Dirfiles.map((value) => value.name);
  while (true) {
    // ターミナルサイズはリサイズに追従するため毎フレーム取得するが、
    // サブプロセスを起こさないシステムコールなので軽量
    const Windowsize = {
      lines: getLines(),
      collums: getColumns(),
    };
    const Sl = DreawSLs({
      files: files,
      frame: frames,
      Windowsize: Windowsize,
      reverse: reverse,
      ForwardBackwardReversal: StartFromLeft,
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
