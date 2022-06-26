import { stringWidth } from "../../deps.ts";
import { replaceAt } from "./replaceAt.ts";
type DrewSlScreenType = {
  backgroundtexts: string[];
  slText: string[];
};

export const DrewSlScreen = (props: DrewSlScreenType): string[] => {
  const res = props.backgroundtexts;
  const slSize = {
    height: props.slText.length,
    width: stringWidth(props.slText[0]),
  };
  const backgroundTextSize = {
    height: props.backgroundtexts.length,
    width: stringWidth(props.backgroundtexts[0]),
  };
  const backgroundTextMid = {
    lineMid: Math.floor(backgroundTextSize.height / 2),

    ClummsMid: Math.floor(backgroundTextSize.width / 2),
  };
  for (let i = 0; i < slSize.height; i++) {
    const Y = Math.floor(backgroundTextMid.lineMid - slSize.height / 2) + i;

    const X = Math.floor(backgroundTextMid.ClummsMid - slSize.width / 2);
    res[Y] = replaceAt({
      BaseText: res[Y],
      replaceText: props.slText[i],
      index: X,
    });
  }
  return res;
};
