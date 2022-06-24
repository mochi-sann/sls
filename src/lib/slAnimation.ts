import { SlAciiArt } from "./slAa.ts";
import { SplitArry } from "./spilitArry.ts";
type SlAnimationType = {
  files: string[];
  slAnimationNumber?: number;
};

export const SlAnimation = (props: SlAnimationType): string[] => {
  const ReaturnValue: string[] = [];
  const CoalWagon: string[] = SlAciiArt.coalWagon;
  const files = SplitArry({
    arry: props.files,
    dividedOfNumber: SlAciiArt.cargo.maxContentHeigt,
  });
  const WheelNumber: number = (props.slAnimationNumber || 0) %
    SlAciiArt.wheel.length;

  SlAciiArt.slTop.map((value, slTopkey) => {
    // console.log(value + CoalWagon[slTopkey]);
    ReaturnValue[slTopkey] = value + CoalWagon[slTopkey];
  });

  // render  wheel
  SlAciiArt.wheel[WheelNumber].map(
    (value1, slWheelKey) => {
      // console.log(value1 + CoalWagon[slWheelKey + 7]);
      ReaturnValue[slWheelKey + 7] = value1 + CoalWagon[slWheelKey + 7];
    },
  );

  // render cal wagon
  SlAciiArt.cargo.wogon.map((value, key) => {
    ReaturnValue[key] = ReaturnValue[key] + value;
  });
  // render wagon
  files.map((value) => {
    value.map((value2, key2) => {
      ReaturnValue[key2] = ReaturnValue[key2] + "   " + value2;
    });
  });

  // console.log(await ReadDirFile());
  return ReaturnValue;
};
