const invokeColumnsProcess = () => {
  return Deno.run({
    cmd: ["tput", "cols"],
    stdout: "piped",
  });
};

const invokeLinesProcess = () => {
  return Deno.run({
    cmd: ["tput", "lines"],
    stdout: "piped",
  });
};

const getColumns = (): number => {
  const { columns }: { columns: number; rows: number } = Deno
    .consoleSize(
      Deno.stdout.rid,
    );

  return columns;
};

const getLines = (): number => {
  const { rows }: { columns: number; rows: number } = Deno
    .consoleSize(
      Deno.stdout.rid,
    );

  return rows;
};
const GetEmptyFullScren = (collums: number, lines: number): string[] => {
  const EmptyFullScren: string[] = Array(lines).fill(" ".repeat(collums));
  return EmptyFullScren;
};
export { getColumns, GetEmptyFullScren, getLines };
