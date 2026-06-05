// ターミナルサイズが取得できない環境(パイプ等)向けのフォールバック値
const FALLBACK_COLUMNS = 80;
const FALLBACK_LINES = 24;

const getConsoleSize = (): { columns: number; rows: number } => {
  try {
    // tput等のサブプロセスを起動せず、システムコールで直接取得する
    return Deno.consoleSize();
  } catch {
    return { columns: FALLBACK_COLUMNS, rows: FALLBACK_LINES };
  }
};

const getColumns = (): number => {
  return getConsoleSize().columns;
};

const getLines = (): number => {
  return getConsoleSize().rows;
};
const GetEmptyFullScren = (collums: number, lines: number): string[] => {
  const EmptyFullScren: string[] = Array(lines).fill(" ".repeat(collums));
  return EmptyFullScren;
};
export { getColumns, GetEmptyFullScren, getLines };
