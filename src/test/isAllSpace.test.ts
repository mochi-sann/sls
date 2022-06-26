import { IsAllSpace } from "../lib/IsAllSpace.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("IS Empty text", () => {
  const text = `                      
                      
                      
                      
                      
                      
                      
                      `;

  assertEquals(IsAllSpace(text), true);
});
Deno.test("IS not Empty text", () => {
  const text = `                      
                      
                      
                      
      hello           
                      
                      
                      `;

  assertEquals(IsAllSpace(text), false);
});
