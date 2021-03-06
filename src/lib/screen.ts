import { stringWidth } from "../../deps.ts";
import { replaceAt } from "./replaceAt.ts";
import { ReverseText } from "./reverseText.ts";
type DrewSlScreenType = {
  backgroundtexts: string[];
  slText: string[];
  fream?: number;
  reverse: boolean;
};

export const DrewSlScreen = (props: DrewSlScreenType): string[] => {
  const res = props.backgroundtexts;
  const Fream = props.fream || 0;
  let slText = [...props.slText];
  if (props.reverse) {
    slText = slText.map((text) => text.split("").reverse().join(""));
    slText = slText.map((text) => {
      return ReverseText(text);
    });
  }
  const slSize = {
    height: slText.length,
    width: stringWidth(slText[0]),
  };
  const backgroundTextSize = {
    height: props.backgroundtexts.length,
    width: stringWidth(props.backgroundtexts[0]),
  };
  if (backgroundTextSize.width < Fream) {
    const sliceWidht = Fream - backgroundTextSize.width;
    slText = slText.map((value) => {
      return value.slice(sliceWidht);
    });
  }
  const backgroundTextMid = {
    lineMid: Math.floor(backgroundTextSize.height / 2),

    ClummsMid: Math.floor(backgroundTextSize.width / 2),
  };
  for (let i = 0; i < slSize.height; i++) {
    const Y = Math.floor(backgroundTextMid.lineMid - slSize.height / 2) + i;

    const X = Math.floor(backgroundTextMid.ClummsMid - slSize.width / 2);

    res[Y] = replaceAt({
      BaseText: res[Y],
      replaceText: slText[i],
      index: props.fream ? backgroundTextSize.width - props.fream : X,
    });
  }
  const ReturnValue = res.map((value, key) => {
    if (
      stringWidth(value) > backgroundTextSize.width
    ) {
      return value.substring(0, backgroundTextSize.width);
    } else {
      return value;
    }
  });
  return ReturnValue;
};
