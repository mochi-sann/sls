import { DreawSLs } from "./src/sls.ts";
import { ReadDirFile } from "./src/lib/ReadDir.ts";
import { getColumns, getLines } from "./src/lib/process.ts";
import { Command, sleep } from "./deps.ts";
const { options, args } = await new Command()
  .name("sls")
  .arguments("[dir]")
  .option("-s, --speed <number>", "set Sl speed", {
    default: 30,
  })
  .option("-r, --reverse", "reverse Sl ")
  .option("-l --loop ", "loop sl")
  .option("--startFromLeft ", "sl start from Left")
  .description("show filelist with sl")
  .version("1.1.1")
  .parse(Deno.args);

const Speed: number = options.speed;
const reverse: boolean = options.reverse || false;
const StartFromLeft: boolean = options.startFromLeft || false;

// ANSIエスケープシーケンス
const HIDE_CURSOR = "\x1b[?25l";
const SHOW_CURSOR = "\x1b[?25h";
const CLEAR_SCREEN = "\x1b[2J\x1b[H"; // 画面全消去 + カーソルをホームへ
const CURSOR_HOME = "\x1b[H"; // カーソルを左上へ(画面は消さない)

const encoder = new TextEncoder();
const write = (text: string): void => {
  Deno.stdout.writeSync(encoder.encode(text));
};

const main = async () => {
  let frames: number = 0;
  const Dir: string = args[0] || ".";
  const Dirfiles = await ReadDirFile(Dir);
  // ファイル一覧はアニメーション中に変化しないのでループ外で一度だけ生成する
  const files = Dirfiles.map((value) => value.name);

  // 終了時(正常終了/Ctrl+C)に必ずカーソルを復帰させる
  const restore = () => write(SHOW_CURSOR);
  // Ctrl+Cでもカーソルを戻して終了する。名前付き関数にして finally で解除する。
  // (解除しないとリスナーがイベントループを生かし続け、正常終了時にハングする)
  const onSigint = () => {
    restore();
    Deno.exit(130);
  };
  let sigintRegistered = false;
  try {
    Deno.addSignalListener("SIGINT", onSigint);
    sigintRegistered = true;
  } catch {
    // SIGINT未対応の環境は無視
  }

  // 開始時に一度だけ画面をクリアし、カーソルを隠す
  write(HIDE_CURSOR + CLEAR_SCREEN);
  try {
    while (true) {
      // ターミナルサイズはリサイズに追従するため毎フレーム取得するが、
      // サブプロセスを起こさないシステムコールなので軽量
      const Windowsize = {
        lines: getLines(),
        collums: getColumns(),
      };
      const Sl = DreawSLs({
        files: files,
        frame: frames,
        Windowsize: Windowsize,
        reverse: reverse,
        ForwardBackwardReversal: StartFromLeft,
      });
      // 画面を消さずにカーソルをホームへ戻して上書きすることでちらつきを防ぐ。
      // フレームは全画面分の文字で埋まっているため残像は残らない。
      // 1回の書き込みでフレーム全体を出力する(clear+logの2操作を1操作に)。
      if (frames > 0) {
        write(CURSOR_HOME + Sl.slText);
      }
      await sleep(1 / Speed);
      if (!Sl.isShowSl && options.loop) {
        frames = 0;
      } else if (!Sl.isShowSl && !options.loop) {
        break;
      }
      frames++;
    }
  } finally {
    restore();
    // リスナーを解除しないとイベントループが残りプロセスが終了しないため、確実に解除する
    if (sigintRegistered) {
      Deno.removeSignalListener("SIGINT", onSigint);
    }
  }
};
main();
