export const replaceAt = (text: string, index: number, replacement: string) => {
  return (
    text.substr(0, index) +
    replacement +
    text.substr(index + replacement.length)
  );
};
