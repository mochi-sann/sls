// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt@0.28.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: [
    { path: "./mod.ts", kind: "export", name: "DrewSls" },
    {
      kind: "bin",
      name: "sls", // command name
      path: "./cli.ts",
    },
  ],
  outDir: "./npm",

  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "sls",
    version: Deno.args[0],
    description: "hoge",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/mochi-sann/sls.git",
    },
    bugs: {
      url: "https://github.com/mochi-sann/sls/issues/new",
    },
  },
  typeCheck: false,
  test: true,
  declaration: true,
  scriptModule: false,
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
