import { SlAnimation } from "./lib/slAnimation.ts";
import { GetEmptyFullScren } from "./lib/process.ts";
import { DrewSlScreen } from "./lib/screen.ts";
import { IsAllSpace } from "./lib/IsAllSpace.ts";

type DreawSlsType = {
  Windowsize: {
    lines: number;
    collums: number;
  };
  files: string[];
  frame: number;
  reverse: boolean;
};
type DreawSlsReturnType = { slText: string; isShowSl: boolean };

const DreawSLs = (args: DreawSlsType): DreawSlsReturnType => {
  const { files, frame, reverse } = args;
  const Windowsize = {
    collums: args.Windowsize.collums,
    lines: args.Windowsize.lines,
  };
  const EmptyFullScren = GetEmptyFullScren(
    Windowsize.collums,
    Windowsize.lines,
  );
  const Sl = SlAnimation({
    files: args.files,
    slAnimationNumber: frame,
  });
  const AnSL = DrewSlScreen({
    slText: Sl,
    backgroundtexts: EmptyFullScren,
    fream: frame,
    reverse: reverse,
  });

  const SlAnimationText = AnSL.join("\n");
  return { slText: SlAnimationText, isShowSl: !IsAllSpace(SlAnimationText) };
};
export type { DreawSlsReturnType, DreawSlsType };
export { DreawSLs };
