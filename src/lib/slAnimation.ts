import { SlAciiArt } from "./slAa.ts";
import { CreateWagon } from "./createWagon.ts";
type SlAnimationType = {
  files: string[];
  slAnimationNumber?: number;
};

// 貨車(ファイル一覧)はフレームごとに変化しないため、同じ内容のfilesに対しては
// 一度計算した結果を再利用してフレームごとの再計算を避ける。
// 参照比較だと「同一参照のまま内容変更」を検出できず、また「同一内容の別参照」で
// キャッシュが効かないため、ファイル名から生成した内容ベースのキーで判定する。
// 単純なjoinは ["a","b\nc"] と ["a\nb","c"] のような要素境界の衝突を起こすため、
// JSON.stringifyで曖昧さなくシリアライズする(CreateWagonに比べ十分軽量)。
const buildCacheKey = (files: string[]): string => {
  return JSON.stringify(files);
};
let cachedKey: string | null = null;
let cachedCargo: string[] | null = null;
const getCargo = (files: string[]): string[] => {
  const key = buildCacheKey(files);
  if (cachedKey !== key || cachedCargo === null) {
    cachedKey = key;
    cachedCargo = CreateWagon({ files });
  }
  return cachedCargo;
};

export const SlAnimation = (props: SlAnimationType): string[] => {
  const SmokeFreameSwitchNumber = 6; // smokeを何フレームごとに切り替えるかの数
  const ReturnValue: string[] = [];
  const CoalWagon: string[] = SlAciiArt.coalWagon;
  const Cargo = getCargo(props.files);
  const SmakeNumber: number = (props.slAnimationNumber || 0) %
    (SlAciiArt.smoke.length * SmokeFreameSwitchNumber);

  const Smaoke =
    SlAciiArt.smoke[Math.floor(SmakeNumber / SmokeFreameSwitchNumber)];
  const WheelNumber: number = (props.slAnimationNumber || 0) %
    SlAciiArt.wheel.length;

  SlAciiArt.slTop.map((value, slTopkey) => {
    // console.log(value + CoalWagon[slTopkey]);
    ReturnValue[slTopkey] = value + CoalWagon[slTopkey];
  });

  // render  wheel
  SlAciiArt.wheel[WheelNumber].map(
    (value1, slWheelKey) => {
      // console.log(value1 + CoalWagon[slWheelKey + 7]);
      ReturnValue[slWheelKey + 7] = value1 + CoalWagon[slWheelKey + 7];
    },
  );

  // render cal wagon
  Cargo.map((value, key) => {
    ReturnValue[key] = ReturnValue[key] + value;
  });

  // console.log(await ReadDirFile());
  return Smaoke.concat(ReturnValue);
};
