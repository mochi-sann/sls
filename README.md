# sls

[![.github/workflows/test.yml](https://github.com/mochi-sann/sls/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/mochi-sann/sls/actions/workflows/test.yml)
[![GitHub license](https://img.shields.io/github/license/mochi-sann/sls)](https://github.com/mochi-sann/sls/blob/main/LICENSE)

ls results are displayed in the SL

[![asciicast](https://asciinema.org/a/bs7b3eiVOz8ciOFIcr4O51o3M.svg)](https://asciinema.org/a/bs7b3eiVOz8ciOFIcr4O51o3M)

## Usage

**CLI**

```shell
Install:
  deno install --allow-run --allow-read --name sls https://deno.land/x/sls/cli.ts

Usage:
  sls .

Help Options:
  sls --help

Application Opitions:
  -r, --reverse            Reverse the direction of the SL
  -s, --speed=<number>     Specify SL speed (default : 30)
  -l, --loop               Make the SL display loop
  --startFromLeft          SL will appear from the left side
```
