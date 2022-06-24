import { SlAnimation } from "./lib/slAnimation.ts";
import { ReadDirFile } from "./lib/ReadDir.ts";
import { ChooesFileName } from "./lib/chooseFileName.ts";
import { sleep } from "../deps.ts";
async function sls() {
  const fileList = await ReadDirFile();

  let hoge = 0;
  while (true) {
    const Sl = SlAnimation({
      files: ChooesFileName(fileList),
      slAnimationNumber: hoge,
    });
    console.clear();

    const SlAnimationText = Sl.join("\n");
    console.log("hoge", hoge);
    console.log(SlAnimationText);

    await sleep(0.1);
    hoge++;
  }
}

export { sls };
