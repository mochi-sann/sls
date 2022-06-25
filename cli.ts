import { sls } from "./src/sls.ts";
import { Command } from "./deps.ts";
const { options } = await new Command()
  .name("sls")
  .description("show filelist with sl")
  .version("1.0.0")
  .parse(Deno.args);
sls();
