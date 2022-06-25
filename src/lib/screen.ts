import { stringWidth } from "../../deps.ts";
import { replaceAt } from "./replaceAt.ts";
type DrewSlScreenType = {
  lines: number;
  collums: number;
  backgroundtexts: string[];
  slText: string[];
};

export const DrewSlScreen = (props: DrewSlScreenType): string[] => {
  const res = [...props.backgroundtexts];
  const slSize = {
    height: props.slText.length,
    width: stringWidth(props.slText[0]),
  };
  const SlMid = {
    lineMid: Math.floor(props.lines / 2),
    ClummsMid: Math.floor(props.collums / 2),
  };
  for (let i = 0; i < slSize.height; i++) {
    const X = Math.floor(SlMid.lineMid - slSize.height / 2) + i;
    const Y = Math.floor(SlMid.ClummsMid - slSize.width / 2);
    res[Y] = replaceAt(res[Y], X, props.slText[i]);
  }
  return res;
};
