type replaceAtPropsType = {
  BaseText: string;
  index: number;
  replaceText: string;
};
export const replaceAt = (
  props: replaceAtPropsType,
) => {
  console.log(props.BaseText);
  return (
    ((props.BaseText || "").substring(0, props.index) || "") +
    props.replaceText +
    ((props.BaseText || "").substring(props.index + props.replaceText.length) ||
      "")
  );
};
