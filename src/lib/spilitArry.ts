export type SplitArryPropsType = {
  arry: string[];
  dividedOfNumber: number;
};

const SplitArry = (props: SplitArryPropsType): string[][] => {
  const arrList = [];
  const idx = 0;
  while (idx < props.arry.length) {
    arrList.push(props.arry.splice(idx, idx + props.dividedOfNumber));
  }
  return arrList;
};

export { SplitArry };
