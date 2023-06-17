import { Gameboy } from "../deps.ts";

export async function gameboy(options: GameboyOptions): Promise<GameboyResult> {
  const emulator = new Gameboy();
  emulator.loadGame(options.rom);
  emulator.setCartridgeSaveRam(options.save);
  return new Promise((resolve) => {
    emulator.setOnWriteToCartridgeRam(() => {
      const save = emulator.getCartridgeSaveRam();
      resolve({ save });
    });
  });
}

export interface GameboyOptions {
  rom: ArrayBuffer;
  save: ArrayBuffer;
}

export interface GameboyResult {
  save?: ArrayBuffer;
}
