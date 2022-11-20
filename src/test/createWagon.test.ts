import { assertEquals } from "../../deps.ts";
import { CreateWagon } from "../lib/createWagon.ts";
Deno.test({
  name: "wagon with 5 fils Japanese",
  fn() {
    const wagon = CreateWagon({
      files: ["file1", "file2", "file3", "file4", "ああ5"],
    });
    const fileInWagon = [
      "                            ",
      "____________________________",
      "| file1                    |",
      "| file2                    |",
      "| file3                    |",
      "| file4                    |",
      "| ああ5                    |",
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
  name: "wagon with 8 fils wit Japanese",
  fn() {
    const wagon = CreateWagon({
      files: [
        ".DS_Store",
        "2q-af",
        "fresh-deno-app",
        "marp-test",
        "mochi-slidev",
        "こんにちはー",
        "ああああaa",
        "sls",
      ],
    });
    const fileInWagon = [
      "                               ",
      "_______________________________",
      "| .DS_Store      こんにちはー |",
      "| 2q-af          ああああaa   |",
      "| fresh-deno-app sls          |",
      "| marp-test                   |",
      "| mochi-slidev                |",
      "|_____________________________|",
      "  |_D__D__D_|     |_D__D__D_|  ",
      "   \\_/   \\_/       \\_/   \\_/   ",
    ];
    assertEquals(wagon, fileInWagon);
    /* <test_code> */
  },
  // ...（その他のオプション）
});
Deno.test({
  name: "wagon with 8 fils",
  fn() {
    const wagon = CreateWagon({
      files: [
        ".DS_Store",
        "2q-af",
        "fresh-deno-app",
        "marp-test",
        "mochi-slidev",
        "nuxt-app",
        "nuxt3app-2",
        "sls",
      ],
    });
    const fileInWagon = [
      "                             ",
      "_____________________________",
      "| .DS_Store      nuxt-app   |",
      "| 2q-af          nuxt3app-2 |",
      "| fresh-deno-app sls        |",
      "| marp-test                 |",
      "| mochi-slidev              |",
      "|___________________________|",
      "  |_D__D__D_|   |_D__D__D_|  ",
      "   \\_/   \\_/     \\_/   \\_/   ",
    ];
    assertEquals(wagon, fileInWagon);
    /* <test_code> */
  },
  // ...（その他のオプション）
});
Deno.test({
  name: "wagon with 10 fils",
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
      "| file1 file6              |",
      "| file2 file7              |",
      "| file3 file8              |",
      "| file4 file9              |",
      "| file5 file10             |",
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
  name: "wagon with 10 fils and long file name",
  fn() {
    const wagon = CreateWagon({
      files: [
        "file1",
        "file2",
        "file3",
        "file4",
        "file5file5file5file5file5file5file5file5",
        "file6",
        "file7",
        "file8",
        "file9",
        "file10",
      ],
    });
    const fileInWagon = [
      "                                                   ",
      "___________________________________________________",
      "| file1                                    file6  |",
      "| file2                                    file7  |",
      "| file3                                    file8  |",
      "| file4                                    file9  |",
      "| file5file5file5file5file5file5file5file5 file10 |",
      "|_________________________________________________|",
      "  |_D__D__D_|                         |_D__D__D_|  ",
      "   \\_/   \\_/                           \\_/   \\_/   ",
    ];
    assertEquals(wagon, fileInWagon);
    /* <test_code> */
  },
  // ...（その他のオプション）
});
Deno.test({
  name: "wagon with 1 file ",
  fn() {
    const wagon = CreateWagon({
      files: [
        "file1",
      ],
    });
    const fileInWagon = [
      "                            ",
      "____________________________",
      "| file1                    |",
      "|                          |",
      "|                          |",
      "|                          |",
      "|                          |",
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
  name: "wagon with 1 file so long name",
  fn() {
    const wagon = CreateWagon({
      files: [
        "file1111111111111111111111111111111111111111111111111111111111111111111111",
      ],
    });
    const fileInWagon = [
      "                                                                              ",
      "______________________________________________________________________________",
      "| file1111111111111111111111111111111111111111111111111111111111111111111111 |",
      "|                                                                            |",
      "|                                                                            |",
      "|                                                                            |",
      "|                                                                            |",
      "|____________________________________________________________________________|",
      "  |_D__D__D_|                                                    |_D__D__D_|  ",
      "   \\_/   \\_/                                                      \\_/   \\_/   ",
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
        "file122222222222222222222",
        "file2",
        "file3",
        "file4",
        "file5",
      ],
    });
    const fileInWagon = [
      "                             ",
      "_____________________________",
      "| file122222222222222222222 |",
      "| file2                     |",
      "| file3                     |",
      "| file4                     |",
      "| file5                     |",
      "|___________________________|",
      "  |_D__D__D_|   |_D__D__D_|  ",
      "   \\_/   \\_/     \\_/   \\_/   ",
    ];
    assertEquals(wagon, fileInWagon);
    /* <test_code> */
  },
  // ...（その他のオプション）
});
