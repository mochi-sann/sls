import { SlAnimation } from "./lib/slAnimation.ts";
import { ReadDirFile } from "./lib/ReadDir.ts";
import { ChooesFileName } from "./lib/chooseFileName.ts";
import { sleep } from "../deps.ts";
async function sls() {
  const fileList = await ReadDirFile();
  console.clear();
  let hoge = 0;
  while (true) {
    const Sl = SlAnimation({
      files: ChooesFileName(fileList),
      slAnimationNumber: hoge,
    });
    Sl.map((value) => {
      console.log(value);
    });

    await sleep(0.3);
    console.clear();
    hoge++;
  }
}

export { sls };
