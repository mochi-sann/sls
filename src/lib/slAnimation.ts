import { SlAciiArt } from "./slAa.ts";
import { CreateWagon } from "./createWagon.ts";
type SlAnimationType = {
  files: string[];
  slAnimationNumber?: number;
};

export const SlAnimation = (props: SlAnimationType): string[] => {
  const ReturnValue: string[] = [];
  const CoalWagon: string[] = SlAciiArt.coalWagon;
  const Cargo = CreateWagon({ files: props.files });

  const WheelNumber: number = (props.slAnimationNumber || 0) %
    SlAciiArt.wheel.length;

  SlAciiArt.slTop.map((value, slTopkey) => {
    // console.log(value + CoalWagon[slTopkey]);
    ReturnValue[slTopkey] = value + CoalWagon[slTopkey];
  });

  // render  wheel
  SlAciiArt.wheel[WheelNumber].map(
    (value1, slWheelKey) => {
      // console.log(value1 + CoalWagon[slWheelKey + 7]);
      ReturnValue[slWheelKey + 7] = value1 + CoalWagon[slWheelKey + 7];
    },
  );

  // render cal wagon
  Cargo.map((value, key) => {
    ReturnValue[key] = ReturnValue[key] + value;
  });

  // console.log(await ReadDirFile());
  return ReturnValue;
};
