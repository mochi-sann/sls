type replaceAtPropsType = {
  BaseText: string;
  index: number;
  replaceText: string;
};
export const replaceAt = (
  props: replaceAtPropsType,
): string => {
  const base = props.BaseText || "";
  return (
    base.substring(0, props.index) +
    props.replaceText +
    base.substring(props.index + props.replaceText.length)
  );
};
