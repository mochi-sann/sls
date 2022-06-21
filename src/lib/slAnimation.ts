import { SlAciiArt } from "./slAa.ts";
type SlAnimationType = {
  files: Deno.DirEntry[];
};
export const SlAnimation = (props: SlAnimationType): string[] => {
  const ReaturnValue: string[] = [];
  const CoalWagon: string[] = SlAciiArt.coalWagon;
  const Filelist = props.files;
  const files = Filelist.map((file) => {
    return file.name;
  });
  SlAciiArt.wheel.map((value) => {
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

  files.map((value, key) => {
    ReaturnValue[key] = ReaturnValue[key] + "   " + value;
  });

  // console.log(await ReadDirFile());
  return ReaturnValue;
};
