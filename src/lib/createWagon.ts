import { SplitArry } from "./spilitArry.ts";
type CreateWagonPropsType = {
  files: string[];
};
export const CreateWagon = (props: CreateWagonPropsType): string[] => {
  const FileArrySplit = SplitArry({ arry: props.files, dividedOfNumber: 5 });
  const ReturnValue: string[] = [];

  return ReturnValue;
};
