import { DrewSlScreen } from "../lib/screen.ts";
import { assertEquals } from "../../deps.ts";
import { GetEmptyFullScren } from "../lib/process.ts";

Deno.test("Drew SL on screen center", () => {
  const backgroundtexts = GetEmptyFullScren(20, 10);
  const Text = DrewSlScreen({
    backgroundtexts: backgroundtexts,
    slText: ["hello", "world"],
    reverse: false,
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
    reverse: false,
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
    reverse: false,
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
    reverse: false,
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
    reverse: false,
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
    reverse: false,
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
    reverse: false,
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

Deno.test("reverse : Drew SL on 10 freame", () => {
  const backgroundtexts = GetEmptyFullScren(20, 10);
  const Text = DrewSlScreen({
    backgroundtexts: backgroundtexts,
    slText: ["hello", "world"],
    fream: 10,
    reverse: true,
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
    reverse: false,
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
    reverse: false,
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
    fream: 23,
    reverse: false,
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
Deno.test("Drew SL on 25 freame", () => {
  const backgroundtexts = GetEmptyFullScren(20, 10);
  const Text = DrewSlScreen({
    backgroundtexts: backgroundtexts,
    slText: ["hello", "world"],
    fream: 25,
    reverse: false,
  });
  const Result = [
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
  ];
  assertEquals(Text, Result);
});
