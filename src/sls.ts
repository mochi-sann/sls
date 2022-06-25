import { SlAnimation } from "./lib/slAnimation.ts";
import { ReadDirFile } from "./lib/ReadDir.ts";
import { ChooesFileName } from "./lib/chooseFileName.ts";
import { sleep } from "../deps.ts";
async function sls(dir: string) {
  const fileList = await ReadDirFile(dir);

  let frame = 0;
  while (true) {
    const Sl = SlAnimation({
      files: ChooesFileName(fileList),
      slAnimationNumber: frame,
    });
    console.clear();

    const SlAnimationText = Sl.join("\n");
    console.log("frame", frame);
    console.log(SlAnimationText);
    await sleep(1 / 12);
    frame++;
  }
}

export { sls };
