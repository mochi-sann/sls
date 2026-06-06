export type SplitArryPropsType = {
  arry: string[];
  dividedOfNumber: number;
};

const SplitArry = (props: SplitArryPropsType): string[][] => {
  const { arry, dividedOfNumber } = props;
  // 入力配列を破壊せず、dividedOfNumberごとのチャンクに分割する
  const arrList: string[][] = [];
  for (let i = 0; i < arry.length; i += dividedOfNumber) {
    arrList.push(arry.slice(i, i + dividedOfNumber));
  }
  return arrList;
};

export { SplitArry };
