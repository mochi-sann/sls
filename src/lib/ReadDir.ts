export const ReadDirFile = async (dir?: string): Promise<Deno.DirEntry[]> => {
  let fileNames: Deno.DirEntry[] = [];
  try {
    for await (const dirEntry of Deno.readDir(dir || ".")) {
      fileNames.push(dirEntry);
    }
    fileNames = fileNames.sort(function (a, b) {
      const nameA = a.name.toUpperCase(); // 大文字と小文字を無視する
      const nameB = b.name.toUpperCase(); // 大文字と小文字を無視する
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  } catch (err) {
    console.error(err);
  }
  return fileNames;
};
