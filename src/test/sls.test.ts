import { assertEquals } from "../../deps.ts";
import { DreawSLs, DreawSlsType } from "../sls.ts";

Deno.test("Is Show SL", () => {
  const DrewSlsProps: DreawSlsType = {
    files: ["file1", "file2", "file3", "file4"],
    frame: 50,
    Windowsize: {
      lines: 30,
      collums: 100,
    },
  };
  const sl = DreawSLs(DrewSlsProps);
  assertEquals(sl.isShowSl, true);
});
Deno.test("Is Show SL 2", () => {
  const DrewSlsProps: DreawSlsType = {
    files: ["file1", "file2", "file3", "file4"],
    frame: 130,
    Windowsize: {
      lines: 30,
      collums: 100,
    },
  };
  const sl = DreawSLs(DrewSlsProps);
  assertEquals(sl.isShowSl, true);
});
Deno.test("Is not Show SL ", () => {
  const DrewSlsProps: DreawSlsType = {
    files: ["file1", "file2", "file3", "file4"],
    frame: 1090,
    Windowsize: {
      lines: 30,
      collums: 100,
    },
  };
  const sl = DreawSLs(DrewSlsProps);
  assertEquals(sl.isShowSl, false);
});
