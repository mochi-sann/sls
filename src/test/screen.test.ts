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
