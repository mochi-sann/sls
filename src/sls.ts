import { SlAnimation } from "./lib/slAnimation.ts";
import { ReadDirFile } from "./lib/ReadDir.ts";
import { ChooesFileName } from "./lib/chooseFileName.ts";
import { sleep } from "../deps.ts";
import { getColumns, GetEmptyFullScren, getLines } from "./lib/process.ts";
import { DrewSlScreen } from "./lib/screen.ts";

async function sls(dir: string) {
  const fileList = await ReadDirFile(dir);
  let frame = 0;
  while (true) {
    const Windowsize = {
      collums: await getColumns(),
      lines: await getLines(),
    };
    const EmptyFullScren = GetEmptyFullScren(
      Windowsize.collums,
      Windowsize.lines,
    );
    const Sl = SlAnimation({
      files: ChooesFileName(fileList),
      slAnimationNumber: frame,
    });
    const AnSL = DrewSlScreen({
      slText: Sl,
      backgroundtexts: EmptyFullScren,
      lines: Windowsize.lines,
      collums: Windowsize.collums,
    });
    console.clear();

    const SlAnimationText = AnSL.join("\n");
    console.log(
      "frame",
      frame,
      "collums",
      Windowsize.collums,
      "lines",
      Windowsize.lines,
    );
    console.log(SlAnimationText);
    await sleep(1 / 12);
    frame++;
  }
}

export { sls };
