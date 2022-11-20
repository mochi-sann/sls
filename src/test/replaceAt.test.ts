import { replaceAt } from "../lib/replaceAt.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("Replace Text 1", () => {
  const baseText = "helloWorldText";
  const replaceText = "deno";
  const index = 5;
  const Replace = replaceAt({
    BaseText: baseText,
    index: index,
    replaceText: replaceText,
  });
  const Result = "hellodenodText";
  assertEquals(Replace, Result);
});
Deno.test("Replace Text 2", () => {
  const baseText = "Hello world ,This is my World";
  const replaceText = "deno";
  const index = 13;
  const Replace = replaceAt({
    BaseText: baseText,
    index: index,
    replaceText: replaceText,
  });
  const Result = "Hello world ,deno is my World";
  assertEquals(Replace, Result);
});
Deno.test("Replace Text Japanese", () => {
  const baseText = "Hello world ,This is my World";
  const replaceText = "こん";
  const index = 13;
  const Replace = replaceAt({
    BaseText: baseText,
    index: index,
    replaceText: replaceText,
  });
  const Result = "Hello world ,こん is my World";
  assertEquals(Replace, Result);
});
