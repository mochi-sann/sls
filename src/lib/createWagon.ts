import { SplitArry } from "./spilitArry.ts";
import { stringWidth } from "../../deps.ts";
import { FileFormat } from "./fileFormat.ts";
import { SlAciiArt } from "./slAa.ts";
type CreateWagonPropsType = {
  files: string[];
};
export const CreateWagon = (props: CreateWagonPropsType): string[] => {
  const cargo = SlAciiArt.cargo;
  const files = FileFormat({
    files: props.files,
    MaxRow: cargo.maxContentHeigt,
  });
  const ReturnValue: string[] = [
    cargo.wogon[0],
    cargo.wogon[1],
    cargo.LeftAndRigntWall,
    cargo.LeftAndRigntWall,
    cargo.LeftAndRigntWall,
    cargo.LeftAndRigntWall,
    cargo.LeftAndRigntWall,
    cargo.wogon[7],
    cargo.wogon[8],
    cargo.wogon[9],
  ];
  const WagonWidth: number = Math.max(
    stringWidth(
      cargo.wogon[0],
    ),
    stringWidth(ReturnValue[2] + "" + files[0] + "|"),
  );

  const addSpavefileNames = files.map((value, key) => {
    let Filenames = ReturnValue[key + 2] + " " +
      value;
    const FilenamesWidth: number = stringWidth(Filenames);
    if (WagonWidth > FilenamesWidth + 2) {
      return Filenames += " ".repeat(WagonWidth - FilenamesWidth - 1);
    } else {
      return Filenames;
    }
  });
  addSpavefileNames.map((fileRow, key) => {
    ReturnValue[key + 2] = fileRow + "|";
  });
  return ReturnValue;
};
