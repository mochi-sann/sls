const ChooesFileName = (files: Deno.DirEntry[]): string[] => {
  return files.map((file) => file.name);
};
export { ChooesFileName };
