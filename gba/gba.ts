import { GBA } from "../deps.ts";
import { BIOS_BIN } from "./bios.ts";
import { KeyCode } from "./keycode.ts";

// Reference:
// https://github.com/DjDeveloperr/DenoGBA/blob/main/gba.ts
//

export function gba(options: GBAOptions): typeof GBA {
  const emulator = new GBA();
  emulator.setBios(BIOS_BIN);
  emulator.setCanvasMemory();
  emulator.setROM(options.rom.buffer);
  emulator.setSavedata(options.save.buffer);
  emulator.runStable();

  // Research: How do I know how many frames to advance per request?
  // See:
  // https://github.com/HFO4/gameboy.live
  //

  return emulator;
}

export interface GBAOptions {
  rom: Uint8Array;
  save: Uint8Array;
}
