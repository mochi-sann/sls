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
};
type DreawSlsReturnType = { slText: string; isShowSl: boolean };

const DreawSLs = (args: DreawSlsType): DreawSlsReturnType => {
  const { files, frame } = args;
  const Windowsize = {
    collums: args.Windowsize.collums,
    lines: args.Windowsize.lines,
  };
  const EmptyFullScren = GetEmptyFullScren(
    Windowsize.collums,
    Windowsize.lines,
  );
  const Sl = SlAnimation({
    files: files,
    slAnimationNumber: frame,
  });
  const AnSL = DrewSlScreen({
    slText: Sl,
    backgroundtexts: EmptyFullScren,
    fream: frame,
  });

  const SlAnimationText = AnSL.join("\n");
  return { slText: SlAnimationText, isShowSl: IsAllSpace(SlAnimationText) };
};
export type { DreawSlsReturnType, DreawSlsType };
export { DreawSLs };
