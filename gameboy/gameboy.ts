import { gameboy_emulator } from "dterm/deps.ts";

export interface GameboyOptions {
  rom: ArrayBuffer;
  save?: ArrayBuffer;

  handleWriteToCartridgeRam: (save: ArrayBuffer) => void;
}

export interface GameboyResult {
  save?: ArrayBuffer;
}

export async function gameboy(options: GameboyOptions): Promise<GameboyResult> {
  const emulator = new gameboy_emulator.Gameboy();
  emulator.loadGame(options.rom);
  if (options.save) {
    emulator.setCartridgeSaveRam(options.save);
  }

  return new Promise((resolve) => {
    emulator.setOnWriteToCartridgeRam(() => {
      const save = emulator.getCartridgeSaveRam();
      if (save) {
        options.handleWriteToCartridgeRam(save);
      }

      resolve({ save });
    });
  });
}
