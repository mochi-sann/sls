import { replaceAt } from "../lib/replaceAt.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("Replace Text 1", () => {
  const baseText = "helloWorldText";
  const replaceText = "deno";
  const Replace = replaceAt(baseText, 4, replaceText);
  const Result = "helldenoldText";
  assertEquals(Replace, Result);
});
Deno.test("Replace Text 2", () => {
  const baseText = "Hello world ,This is my World";
  const replaceText = "deno";
  const Replace = replaceAt(baseText, 13, replaceText);
  const Result = "Hello world ,deno is my World";
  assertEquals(Replace, Result);
});
