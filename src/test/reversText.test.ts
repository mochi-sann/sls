import { assertEquals } from "../../deps.ts";
import { ReverseText } from "../lib/reverseText.ts";
Deno.test("reverse Test", () => {
  const Text = "() [] \\ / ";

  const Resulrt = ReverseText(Text);
  const Replace = ")( ][ / \\ ";
  assertEquals(Resulrt, Replace);
});
Deno.test("reverse many Txet ", () => {
  const Text =
    "()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()() [] \\ / ";

  const Resulrt = ReverseText(Text);
  const Replace =
    ")()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()( ][ / \\ ";
  assertEquals(Resulrt, Replace);
});
