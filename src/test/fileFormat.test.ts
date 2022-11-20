import { FileFormat } from "../lib/fileFormat.ts";
import { assertEquals, stringWidth } from "../../deps.ts";

Deno.test("format file names Japanese", () => {
  const files = [
    "hello1",
    "fileeeeeeeeeeeeeeeeeee",
    "あああああああああああ",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  const Result = [
    "hello1                 6  ",
    "fileeeeeeeeeeeeeeeeeee 7  ",
    "あああああああああああ 8  ",
    "4                      9  ",
    "5                      10 ",
  ];
  assertEquals(FileFormat({ files: files, MaxRow: 5 }), Result);
});
Deno.test("format file names Japanese 2", () => {
  const files = [
    "hello1",
    "ああaaaaa",
    "ああああa",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  const Result = [
    "hello1    6  ",
    "ああaaaaa 7  ",
    "ああああa 8  ",
    "4         9  ",
    "5         10 ",
  ];
  assertEquals(FileFormat({ files: files, MaxRow: 5 }), Result);
});
Deno.test("format file names 1", () => {
  const files = [
    "hello1",
    "fileeeeeeeeeeeeeeeeeee",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  const Result = [
    "hello1                 6  ",
    "fileeeeeeeeeeeeeeeeeee 7  ",
    "3                      8  ",
    "4                      9  ",
    "5                      10 ",
  ];
  assertEquals(FileFormat({ files: files, MaxRow: 5 }), Result);
});
Deno.test("format file names 7", () => {
  const files = [
    "hello1",
    "fileeeeeeeeeeeeeeeeeee",
    "3",
    "4",
    "5",
    "6",
    "7",
  ];
  const Result = [
    "hello1                 6 ",
    "fileeeeeeeeeeeeeeeeeee 7 ",
    "3                        ",
    "4                        ",
    "5                        ",
  ];
  assertEquals(FileFormat({ files: files, MaxRow: 5 }), Result);
});
Deno.test("format file names 1", () => {
  const files = [
    ".DS_Store",
    "2q-af",
    "fresh-deno-app",
    "marp-test",
    "mochi-slidev",
    "nuxt-app",
    "nuxt3app-2",
    "sls",
  ];
  const Result = [
    ".DS_Store      nuxt-app   ",
    "2q-af          nuxt3app-2 ",
    "fresh-deno-app sls        ",
    "marp-test                 ",
    "mochi-slidev              ",
  ];
  assertEquals(FileFormat({ files: files, MaxRow: 5 }), Result);
});
Deno.test("format file names 2", () => {
  const files = [
    "hello1",
    "fileeeeeeeeeeeeeeeeeee",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "helloworld",
    "10",
  ];
  const Result = [
    "hello1                 6                                ",
    "fileeeeeeeeeeeeeeeeeee 7                                ",
    "3                      8aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ",
    "4                      helloworld                       ",
    "5                      10                               ",
  ];
  assertEquals(FileFormat({ files: files, MaxRow: 5 }), Result);
});
Deno.test("format file names is same widht", () => {
  const files = [
    "hello1",
    "fileeeeeeeeeeeeeeeeeee",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "helloworld",
    "10",
  ];
  const FormatedList = FileFormat({ files: files, MaxRow: 5 });
  const FirstWidht: number = stringWidth(FormatedList[0]);
  FormatedList.map((filename) => {
    assertEquals(stringWidth(filename), FirstWidht);
  });
});
Deno.test("format file names is same widht so long", () => {
  const files = [
    "hello1",
    "fileeeeeeeeeeeeeeeeeee",
    "3",
    "4",
    "5asdlfa;ewh;oooooooooojflakjwelrkja;lwekjra;lkjewrlkja;wlekj;jkjas;dlkfja;lskdjf;alksjdf;lkajl;ksdjf",
    "6asdhfkljahdslkfjhaereiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
    "7",
    "8aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "helloworld",
    "10",
  ];
  const FormatedList = FileFormat({ files: files, MaxRow: 5 });
  const FirstWidht: number = stringWidth(FormatedList[0]);
  FormatedList.map((filename) => {
    assertEquals(stringWidth(filename), FirstWidht);
  });
});
