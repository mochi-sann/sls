import { ChooesFileName } from "../lib/chooseFileName.ts";
import { assertEquals } from "../../deps.ts";
Deno.test({
  name: "convert Deno.DirEntry => string[]",
  fn() {
    const files = ChooesFileName([
      { name: "deno.json", isFile: true, isDirectory: false, isSymlink: false },
      {
        name: ".gitignore",
        isFile: true,
        isDirectory: false,
        isSymlink: false,
      },
      { name: ".git", isFile: false, isDirectory: true, isSymlink: false },
      { name: ".vscode", isFile: false, isDirectory: true, isSymlink: false },
      { name: "src", isFile: false, isDirectory: true, isSymlink: false },
    ]);
    assertEquals(files, [
      "deno.json",
      ".gitignore",
      ".git",
      ".vscode",
      "src",
    ]);
    /* <test_code> */
  },
  // ...（その他のオプション）
});
