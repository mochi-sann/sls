import { assertEquals } from "../../deps.ts";
import { CreateWagon } from "../lib/createWagon.ts";
Deno.test({
  name: "wagon with 5 fils",
  fn() {
    const wagon = CreateWagon({
      files: ["file1", "file2", "file3", "file4", "file5"],
    });
    const fileInWagon = [
      "                            ",
      "____________________________",
      "| file1                    |",
      "| file2                    |",
      "| file3                    |",
      "| file4                    |",
      "| file5                    |",
      "|__________________________|",
      "  |_D__D__D_|  |_D__D__D_|  ",
      "   \\_/   \\_/    \\_/   \\_/   ",
    ];
    assertEquals(wagon, fileInWagon);
    /* <test_code> */
  },
  // ...（その他のオプション）
});
Deno.test({
  name: "wagon with 5 fils",
  fn() {
    const wagon = CreateWagon({
      files: [
        "file1",
        "file2",
        "file3",
        "file4",
        "file5",
        "file6",
        "file7",
        "file8",
        "file9",
        "file10",
      ],
    });
    const fileInWagon = [
      "                            ",
      "____________________________",
      "| file1 file6                   |",
      "| file2 file7                |",
      "| file3 file8                  |",
      "| file4 file9                  |",
      "| file5 file10                  |",
      "|__________________________|",
      "  |_D__D__D_|  |_D__D__D_|  ",
      "   \\_/   \\_/    \\_/   \\_/   ",
    ];
    assertEquals(wagon, fileInWagon);
    /* <test_code> */
  },
  // ...（その他のオプション）
});
