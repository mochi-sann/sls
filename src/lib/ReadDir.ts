export const ReadDirFile = async (dir?: string): Promise<Deno.DirEntry[]> => {
  const fileNames: Deno.DirEntry[] = [];
  try {
    for await (const dirEntry of Deno.readDir(dir || ".")) {
      fileNames.push(dirEntry);
    }
  } catch (err) {
    console.error(err);
  }
  return fileNames;
};
