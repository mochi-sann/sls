import { SlAnimation } from "./lib/slAnimation.ts";
import { ReadDirFile } from "./lib/ReadDir.ts";
const fileList = await ReadDirFile();
const Sl = SlAnimation({ files: fileList });
Sl.map((value) => console.log(value));
