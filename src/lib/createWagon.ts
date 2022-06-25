import { SplitArry } from "./spilitArry.ts";
import { SlAciiArt } from "./slAa.ts";
type CreateWagonPropsType = {
  files: string[];
};
export const CreateWagon = (props: CreateWagonPropsType): string[] => {
  const cargo = SlAciiArt.cargo;
  const FileArrySplit = SplitArry({
    arry: props.files,
    dividedOfNumber: cargo.maxContentHeigt,
  });
  const ReturnValue: string[] = [
    cargo.wogon[0],
    cargo.wogon[1],
    cargo.LeftAndRigntWall,
    cargo.LeftAndRigntWall,
    cargo.LeftAndRigntWall,
    cargo.LeftAndRigntWall,
    cargo.LeftAndRigntWall,
    cargo.wogon[8],
    cargo.wogon[9],
  ];

  FileArrySplit.map((fileList, fileListKey) => {
    const stringLength = Math.max(
      ...fileList.map((e) => e.length),
    );

    fileList.map((file, fileKey) => {
    });
  });
  return ReturnValue;
};
