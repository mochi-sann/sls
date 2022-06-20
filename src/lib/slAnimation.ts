import { SlAciiArt } from "../slAa.ts";
import { ReadDirFile } from "./ReadDir.ts";

export const SlAnimation = (dir?: string): string[] => {
  const ReaturnValue: string[] = [];
  const CoalWagon: string[] = SlAciiArt.coalWagon;
  // wheel の種類ごとに描画する
  SlAciiArt.wheel.map((value, wheelKey) => {
    // drawing sl upper side
    SlAciiArt.slTop.map((value, slTopkey) => {
      // console.log(value + CoalWagon[slTopkey]);
      ReaturnValue[slTopkey] = value + CoalWagon[slTopkey];
    });

    // drawing sl wheel side
    value.map((value1, slWheelKey) => {
      // console.log(value1 + CoalWagon[slWheelKey + 7]);
      ReaturnValue[slWheelKey + 7] = value1 + CoalWagon[slWheelKey + 7];
    });
  });
  // console.log(await ReadDirFile());
  return ReaturnValue;
};
console.log("slAnimation", SlAnimation());
