export type SplitArryPropsType = {
  arry: string[];
  dividedOfNumber: number;
};

const SplitArry = (props: SplitArryPropsType): string[][] => {
  const returnValue: string[][] = [[]];
  let doneKey = 0;
  props.arry.map((value, key) => {
    console.log(value);
  });
  return returnValue;
};

export { SplitArry };
