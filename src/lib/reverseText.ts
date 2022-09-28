const ReverseConvertingText = (text: string): string => {
  return `:👀reversetext${text}:`;
};

// 機関車を反対にするときに(とかの見た目が逆になるのでそれを修正する
export const ReverseText = (text: string): string => {
  return text.replaceAll("/", ReverseConvertingText("/"))
    .replaceAll(
      "\\",
      ReverseConvertingText("\\"),
    )
    .replaceAll(
      "[",
      ReverseConvertingText("["),
    )
    .replaceAll(")", ReverseConvertingText(")"))
    .replaceAll("(", ReverseConvertingText("("))
    .replaceAll("]", ReverseConvertingText("]"))
    .replaceAll(ReverseConvertingText("/"), "\\")
    .replaceAll(ReverseConvertingText("\\"), "/")
    .replaceAll(ReverseConvertingText("["), "]")
    .replaceAll(ReverseConvertingText("]"), "[")
    .replaceAll(ReverseConvertingText("("), ")")
    .replaceAll(ReverseConvertingText(")"), "(");
};
