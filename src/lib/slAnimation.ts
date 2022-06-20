import { SlAciiArt } from "../slAa.ts";
import { ReadDirFile } from "./ReadDir.ts";

export const SlAnimation = async () => {
  const CoalWagon: string[] = SlAciiArt.coalWagon;
  SlAciiArt.wheel.map((value, wheelKey) => {
    // drawing sl upper side
    SlAciiArt.slTop.map((value, slTopkey) => {
      console.log(value + CoalWagon[slTopkey]);
    });

    // drawing sl wheel side
    value.map((value1, slWheelKey) => {
      console.log(value1 + CoalWagon[slWheelKey + 7]);
    });
    console.log("\n\n");
  });
  console.log(await ReadDirFile());
};
SlAnimation();
