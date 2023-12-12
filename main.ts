import { gba } from "./gba/gba.ts";

const shit = await gba({
  rom: readROM(),
  save: readSave(),
  handleWriteToCartridgeRam(save) {
    writeSave(save);
  },
});

console.log({ shit });

function readROM() {
  return Deno.readFileSync("./game.gba");
}

function readSave() {
  try {
    return Deno.readFileSync("./game.sav");
  } catch {
    return undefined;
  }
}

function writeSave(buffer: ArrayBuffer) {
  Deno.writeFileSync("./game.sav", new Uint8Array(buffer));
}
