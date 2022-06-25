import { GetEmptyFullScren } from "../lib/process.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("get Empty Scren", () => {
  const Replace = GetEmptyFullScren(20, 10);
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
  assertEquals(Replace, Result);
});
