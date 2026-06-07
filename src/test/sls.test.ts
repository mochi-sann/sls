import { assertEquals } from "../../deps.ts";
import { stringWidth } from "../../deps.ts";
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

Deno.test("全角ファイル名でも全フレームで端末幅を超えない", () => {
  const collums = 80;
  const files = [
    "あいうえお.txt",
    "日本語ファイル名.md",
    "test.ts",
    "コンポーネント.tsx",
  ];
  // 貨車が画面を通過する範囲をひととおり走査し、どの行も端末幅を超えないことを確認する
  for (let frame = 0; frame < 220; frame++) {
    const sl = DreawSLs({
      files,
      frame,
      Windowsize: { lines: 24, collums },
      reverse: false,
      ForwardBackwardReversal: false,
    });
    for (const line of sl.slText.split("\n")) {
      assertEquals(
        stringWidth(line) <= collums,
        true,
        `frame ${frame} の行が端末幅(${collums})を超えました: 幅=${
          stringWidth(line)
        } ${JSON.stringify(line)}`,
      );
    }
  }
});
