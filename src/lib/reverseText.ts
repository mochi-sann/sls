const ReverseConvertingText = (text: string): string => {
  return `:👀reversetext${text}:`;
};

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
