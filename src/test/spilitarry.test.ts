import { assertEquals } from "../../deps.ts";
import { SplitArry } from "../lib/spilitArry.ts";
Deno.test({
  name: "SplitArry",
  fn() {
    const arrys = SplitArry({
      arry: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      dividedOfNumber: 4,
    });
    assertEquals(arrys, [["1", "2", "3", "4"], ["5", "6", "7", "8"], [
      "9",
      "10",
    ]]);
    /* <test_code> */
  },
  // ...（その他のオプション）
});
