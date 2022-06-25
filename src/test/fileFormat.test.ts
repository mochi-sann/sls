import { FileFormat } from "../lib/fileFormat.ts";
import { assertEquals } from "../../deps.ts";

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
