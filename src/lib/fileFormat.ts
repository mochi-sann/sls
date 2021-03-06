import { SplitArry } from "../lib/spilitArry.ts";
import { stringWidth } from "../../deps.ts";

type FileFormatTypes = { files: string[]; MaxRow: number };

export const FileFormat = (props: FileFormatTypes): string[] => {
  const files = props.files;
  if (files.length < 5) {
    for (let i = files.length; i < 5; i++) {
      files.push(" ");
    }
  }
  const ReturnValue: string[] = [];
  const FileSplit = SplitArry({
    arry: files,
    dividedOfNumber: props.MaxRow,
  });
  const FormatFilelistArry = FileSplit.map((files: string[]) => {
    // 一番長いファイル名を取得
    const MaxLength = files.reduce(
      (acc, current) => Math.max(stringWidth(current), acc),
      0,
    );
    const FormatFiles = files.map((value) => {
      // 一番長いファイル名より短ければファイル名のあとにspaceを追加する
      if (stringWidth(value) < MaxLength) {
        const StringWidthDiff: number = MaxLength - stringWidth(value);
        return value + " ".repeat(StringWidthDiff);
      } else {
        return value;
      }
    });
    return FormatFiles;
  });
  // ファイル名を結合して返す
  FormatFilelistArry.map((files) => {
    files.map((file, fileKey) => {
      ReturnValue[fileKey] = ReturnValue[fileKey]
        ? ReturnValue[fileKey] + file + " "
        : file + " ";
    });
  });
  const ReturnValueMaxLenght = ReturnValue.reduce(
    (acc, current) => Math.max(stringWidth(current), acc),
    0,
  );
  return ReturnValue.map((value) => {
    if (stringWidth(value) < ReturnValueMaxLenght) {
      const StringWidthDiff: number = ReturnValueMaxLenght - stringWidth(value);
      return value + " ".repeat(StringWidthDiff);
    } else {
      return value;
    }
  });
};
