import { assertEquals } from "../../deps.ts";
import { stringWidth } from "../../deps.ts";
import {
  overlayByWidth,
  sliceByWidth,
  truncateByWidth,
} from "../lib/widthString.ts";

Deno.test("sliceByWidth: 半角は文字数=表示幅なのでそのまま", () => {
  assertEquals(sliceByWidth("hello", 0, 3), "hel");
  assertEquals(sliceByWidth("hello", 2), "llo");
});

Deno.test("sliceByWidth: 全角が範囲にちょうど収まる", () => {
  assertEquals(sliceByWidth("あいう", 0, 4), "あい");
});

Deno.test("sliceByWidth: 全角が右境界をまたぐと空白で埋める", () => {
  // あ(2) + い の左半分 → "あ "
  assertEquals(sliceByWidth("あいう", 0, 3), "あ ");
});

Deno.test("sliceByWidth: 全角が左境界をまたぐと空白で埋める", () => {
  // あ の右半分 + い → " い"
  assertEquals(sliceByWidth("あいう", 1, 4), " い");
});

Deno.test("sliceByWidth: 半角と全角の混在", () => {
  // a(1) + あ の左半分 → "a "
  assertEquals(sliceByWidth("aあb", 0, 2), "a ");
});

Deno.test("truncateByWidth: 全角を含んでも表示幅で切り詰める", () => {
  const result = truncateByWidth("あいう", 5);
  assertEquals(result, "あい ");
  assertEquals(stringWidth(result), 5);
});

Deno.test("truncateByWidth: 上限より短ければそのまま", () => {
  assertEquals(truncateByWidth("あい", 10), "あい");
});

Deno.test("overlayByWidth: 全角を重ねても背景の表示幅は変わらない", () => {
  const result = overlayByWidth(" ".repeat(10), "あい", 3);
  assertEquals(result, "   あい   ");
  assertEquals(stringWidth(result), 10);
});

Deno.test("overlayByWidth: 左にはみ出した分(負のcol)は左から削る", () => {
  const result = overlayByWidth(" ".repeat(10), "あいうえ", -2);
  assertEquals(result, "いうえ    ");
  assertEquals(stringWidth(result), 10);
});

Deno.test("overlayByWidth: 全角の途中で左にはみ出すと空白で埋める", () => {
  const result = overlayByWidth(" ".repeat(10), "あいうえ", -1);
  assertEquals(result, " いうえ   ");
  assertEquals(stringWidth(result), 10);
});
