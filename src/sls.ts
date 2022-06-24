import { SlAnimation } from "./lib/slAnimation.ts";
import { ReadDirFile } from "./lib/ReadDir.ts";
import { ChooesFileName } from "./lib/chooseFileName.ts";
async function sls() {
  const fileList = await ReadDirFile();
  // console.log(fileList);
  const Sl = SlAnimation({ files: ChooesFileName(fileList) });
  Sl.map((value) => console.log(value));
}

export { sls };
