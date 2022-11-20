import stringWidth from "string-width";

type replaceAtPropsType = {
  BaseText: string;
  index: number;
  replaceText: string;
};
export const replaceAt = (
  props: replaceAtPropsType,
) => {
  const BaseWidth = stringWidth(props.BaseText);
  let NewText = (
    ((props.BaseText || "").substring(0, props.index) || "") +
    props.replaceText +
    ((props.BaseText || "").substring(
      props.index + stringWidth(props.replaceText),
    ) ||
      "")
  );
  return NewText;
};
