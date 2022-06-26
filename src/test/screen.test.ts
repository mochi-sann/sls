import { DrewSlScreen } from "../lib/screen.ts";
import { assertEquals } from "../../deps.ts";
import { GetEmptyFullScren } from "../lib/process.ts";

Deno.test("Drew SL on screen center", () => {
  const backgroundtexts = GetEmptyFullScren(20, 10);
  const Text = DrewSlScreen({
    backgroundtexts: backgroundtexts,
    slText: ["hello", "world"],
  });
  const Result = [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "       hello        ",
    "       world        ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
  ];
  assertEquals(Text, Result);
});
Deno.test("Drew SL on 1 freame", () => {
  const backgroundtexts = GetEmptyFullScren(20, 10);
  const Text = DrewSlScreen({
    backgroundtexts: backgroundtexts,
    slText: ["hello", "world"],
    fream: 1,
  });
  const Result = [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                   h",
    "                   w",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
  ];
  assertEquals(Text, Result);
});
Deno.test("Drew SL on 2 freame", () => {
  const backgroundtexts = GetEmptyFullScren(20, 10);
  const Text = DrewSlScreen({
    backgroundtexts: backgroundtexts,
    slText: ["hello", "world"],
    fream: 2,
  });
  const Result = [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                  he",
    "                  wo",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
  ];
  assertEquals(Text, Result);
});
Deno.test("Drew SL on 3 freame", () => {
  const backgroundtexts = GetEmptyFullScren(20, 10);
  const Text = DrewSlScreen({
    backgroundtexts: backgroundtexts,
    slText: ["hello", "world"],
    fream: 3,
  });
  const Result = [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                 hel",
    "                 wor",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
  ];
  assertEquals(Text, Result);
});
Deno.test("Drew SL on 4 freame", () => {
  const backgroundtexts = GetEmptyFullScren(20, 10);
  const Text = DrewSlScreen({
    backgroundtexts: backgroundtexts,
    slText: ["hello", "world"],
    fream: 4,
  });
  const Result = [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                hell",
    "                worl",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
  ];
  assertEquals(Text, Result);
});
Deno.test("Drew SL on 5 freame", () => {
  const backgroundtexts = GetEmptyFullScren(20, 10);
  const Text = DrewSlScreen({
    backgroundtexts: backgroundtexts,
    slText: ["hello", "world"],
    fream: 5,
  });
  const Result = [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "               hello",
    "               world",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
  ];
  assertEquals(Text, Result);
});
Deno.test("Drew SL on 10 freame", () => {
  const backgroundtexts = GetEmptyFullScren(20, 10);
  const Text = DrewSlScreen({
    backgroundtexts: backgroundtexts,
    slText: ["hello", "world"],
    fream: 10,
  });
  const Result = [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "          hello     ",
    "          world     ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
  ];
  assertEquals(Text, Result);
});
Deno.test("Drew SL on 20 freame", () => {
  const backgroundtexts = GetEmptyFullScren(20, 10);
  const Text = DrewSlScreen({
    backgroundtexts: backgroundtexts,
    slText: ["hello", "world"],
    fream: 20,
  });
  const Result = [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "hello               ",
    "world               ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
  ];
  assertEquals(Text, Result);
});
Deno.test("Drew SL on 21 freame", () => {
  const backgroundtexts = GetEmptyFullScren(20, 10);
  const Text = DrewSlScreen({
    backgroundtexts: backgroundtexts,
    slText: ["hello", "world"],
    fream: 21,
  });
  const Result = [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "ello                ",
    "orld                ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
  ];
  assertEquals(Text, Result);
});
Deno.test("Drew SL on 23 freame", () => {
  const backgroundtexts = GetEmptyFullScren(20, 10);
  const Text = DrewSlScreen({
    backgroundtexts: backgroundtexts,
    slText: ["hello", "world"],
    fream: 21,
  });
  const Result = [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "lo                  ",
    "ld                  ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
  ];
  assertEquals(Text, Result);
});
