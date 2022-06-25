import { SplitArry } from "../lib/spilitArry.ts";
import { stringWidth } from "../../deps.ts";

type FileFormatTypes = { files: string[]; MaxRow: number };
export const FileFormat = (props: FileFormatTypes): string[] => {
  const ReturnValue: string[] = [];
  const FileSplit = SplitArry({
    arry: props.files,
    dividedOfNumber: props.MaxRow,
  });
  const FormatFilelistArry = FileSplit.map((files: string[]) => {
    const MaxLength = files.reduce(
      (acc, current) => Math.max(stringWidth(current), acc),
      0,
    );
    const FormatFiles = files.map((value) => {
      if (stringWidth(value) < MaxLength) {
        const StringWidthDiff: number = MaxLength - stringWidth(value);
        return value + " ".repeat(StringWidthDiff);
      } else {
        return value;
      }
    });
    return FormatFiles;
  });

  FormatFilelistArry.map((files) => {
    files.map((file, fileKey) => {
      ReturnValue[fileKey] = ReturnValue[fileKey]
        ? ReturnValue[fileKey] + file + " "
        : file + " ";
    });
  });
  return ReturnValue;
};
