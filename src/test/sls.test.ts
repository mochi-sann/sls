import { assertEquals } from "../../deps.ts";
import { DreawSLs, DreawSlsType } from "../sls.ts";

Deno.test("Is Show SL", () => {
  const DrewSlProps: DreawSlsType = {
    files: ["file1", "file2", "file3", "file4"],
    frame: 50,
    Windowsize: {
      lines: 30,
      collums: 100,
    },
    reverse: false,
    ForwardBackwardReversal: false,
  };
  const sl = DreawSLs(DrewSlProps);
  assertEquals(sl.isShowSl, true);
});
Deno.test("Is Show SL 2", () => {
  const DrewSlProps: DreawSlsType = {
    files: ["file1", "file2", "file3", "file4"],
    frame: 130,
    Windowsize: {
      lines: 30,
      collums: 100,
    },
    reverse: false,
    ForwardBackwardReversal: false,
  };
  const sl = DreawSLs(DrewSlProps);
  assertEquals(sl.isShowSl, true);
});
Deno.test("Is not Show SL ", () => {
  const DrewSlProps: DreawSlsType = {
    files: ["file1", "file2", "file3", "file4"],
    frame: 212,
    Windowsize: {
      lines: 30,
      collums: 100,
    },
    reverse: false,
    ForwardBackwardReversal: false,
  };
  const sl = DreawSLs(DrewSlProps);
  assertEquals(sl.isShowSl, false);
});
