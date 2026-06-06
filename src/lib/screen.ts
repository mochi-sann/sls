import { stringWidth } from "../../deps.ts";
import { overlayByWidth } from "./widthString.ts";
import { ReverseText } from "./reverseText.ts";
type DrewSlScreenType = {
  backgroundtexts: string[];
  slText: string[];
  fream?: number;
  reverse: boolean;
};

export const DrewSlScreen = (props: DrewSlScreenType): string[] => {
  const res = props.backgroundtexts;
  let slText = [...props.slText];
  if (props.reverse) {
    // コードポイント単位で反転(サロゲートペアを壊さない)
    slText = slText.map((text) => [...text].reverse().join(""));
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
  const backgroundTextMid = {
    lineMid: Math.floor(backgroundTextSize.height / 2),

    ClummsMid: Math.floor(backgroundTextSize.width / 2),
  };
  for (let i = 0; i < slSize.height; i++) {
    const Y = Math.floor(backgroundTextMid.lineMid - slSize.height / 2) + i;

    const X = Math.floor(backgroundTextMid.ClummsMid - slSize.width / 2);

    // 表示カラム単位で重ねる。col が負(列の左へはみ出す)場合は overlayByWidth
    // 側で左を削るため、ここで slText を事前にスライスする必要はない。
    const col = props.fream ? backgroundTextSize.width - props.fream : X;
    res[Y] = overlayByWidth(res[Y], slText[i], col);
  }
  return res;
};
