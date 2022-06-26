export const IsAllSpace = (text: string): boolean => {
  const sliceText = text.trim();
  return sliceText.length > 0 ? false : true;
};
