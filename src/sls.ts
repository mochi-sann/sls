import { SlAnimation } from "./lib/slAnimation.ts";
import { ReadDirFile } from "./lib/ReadDir.ts";
import { ChooesFileName } from "./lib/chooseFileName.ts";
async function sls() {
  const fileList = await ReadDirFile();
  for (let i = 0; i < 100; i++) {
    const Sl = SlAnimation({
      files: ChooesFileName(fileList),
      slAnimationNumber: i,
    });
    Sl.map((value) => console.log(value));
  }
}

export { sls };
