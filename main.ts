import { gameboy } from "./gameboy/gameboy.ts";

const shit = await gameboy({
  rom: readROM(),
  save: readSave(),
  handleWriteToCartridgeRam(save) {
    writeSave(save);
  },
});

console.log({ shit });

function readROM() {
  return Deno.readFileSync("./game.gbc");
}

function readSave() {
  return Deno.readFileSync("./game.sav");
}

function writeSave(buffer: ArrayBuffer) {
  Deno.writeFileSync("./game.sav", new Uint8Array(buffer));
}
