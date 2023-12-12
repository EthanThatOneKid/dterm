import { GBACore } from "dterm/deps.ts";

export interface GBAOptions {
  rom: ArrayBuffer;
  save?: ArrayBuffer;

  handleWriteToCartridgeRam: (save: ArrayBuffer) => void;
}

export interface GBAResult {
  save?: ArrayBuffer;
}

export async function gba(options: GBAOptions): Promise<GBAResult> {
  const emulator = new GBACore();
  // https://github.com/DjDeveloperr/DenoGBA/blob/7e71e785ea2fb88ef22fff9f9b2cf17c5164a4a5/player.ts#L410

  // emulator.loadGame(options.rom);
  // if (options.save) {
  //   emulator.setCartridgeSaveRam(options.save);
  // }

  // TODO: Reference
  // https://github.com/DjDeveloperr/DenoGBA/blob/main/gba.ts
  // return new Promise((resolve) => {
  //   emulator.setOnWriteToCartridgeRam(() => {
  //     const save = emulator.getCartridgeSaveRam();
  //     if (save) {
  //       options.handleWriteToCartridgeRam(save);
  //     }

  //     resolve({ save });
  //   });
  // });
}
