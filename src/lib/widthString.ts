import { stringWidth } from "../../deps.ts";

// 表示カラム(全角=2, 半角=1)単位で文字列を扱うためのユーティリティ。
// JavaScriptの substring/slice はコードユニット単位で動くため、全角文字を含むと
// 「表示幅」と「文字数」がずれて行のレイアウトが崩れる。ここでは表示幅基準で
// 切り出し・重ね合わせを行うことで日本語などの全角ファイル名でも崩れないようにする。

// 表示カラム [start, end) に重なる範囲を切り出す。
// end を省略すると文字列の末尾まで。全角文字が境界をまたぐ場合は、見える分だけ
// 空白に置き換えて表示幅を保つ(列ズレを防ぐ)。
// 制限: stringWidth が幅0と判定する文字(ANSIエスケープシーケンスや結合文字など)は
// スキップされ消失する。現状このアプリはカラー表示をしないため問題ないが、将来
// 色付き出力をサポートする場合はエスケープシーケンスをパースして通す対応が必要。
export const sliceByWidth = (
  text: string,
  start: number,
  end?: number,
): string => {
  const limit = end ?? Infinity;
  let col = 0;
  let result = "";
  // サロゲートペア(絵文字等)を壊さないようコードポイント単位で走査する
  for (const ch of text) {
    if (col >= limit) break;
    const w = stringWidth(ch);
    const chStart = col;
    const chEnd = col + w;
    col = chEnd;
    const visStart = Math.max(chStart, start);
    const visEnd = Math.min(chEnd, limit);
    if (visStart >= visEnd) continue; // 範囲外
    const visWidth = visEnd - visStart;
    // 文字全体が範囲に収まればそのまま、半端にかかる全角文字は空白で埋める
    result += visWidth === w ? ch : " ".repeat(visWidth);
  }
  return result;
};

// 表示幅 maxWidth カラムに収まるよう切り詰める。
export const truncateByWidth = (text: string, maxWidth: number): string => {
  return sliceByWidth(text, 0, maxWidth);
};

// 背景文字列 base の col カラム目から overlay を上書きする。
// base 全体の表示幅は変えない(端末幅を超えて折り返さないようにするため)。
// col が負の場合は overlay の左側がはみ出しているとみなし、その分を左から削る。
export const overlayByWidth = (
  base: string,
  overlay: string,
  col: number,
): string => {
  let ov = overlay;
  let at = col;
  if (at < 0) {
    ov = sliceByWidth(ov, -at);
    at = 0;
  }
  const baseWidth = stringWidth(base);
  const ovWidth = stringWidth(ov);
  const left = sliceByWidth(base, 0, at);
  const right = sliceByWidth(base, at + ovWidth);
  return truncateByWidth(left + ov + right, baseWidth);
};
