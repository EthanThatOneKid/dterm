import type { KeyCode } from "./keycode.ts";

export interface Controller {
  pressKey(key: KeyCode, milliseconds: number): void;
  keyDown(key: KeyCode): void;
  keyUp(key: KeyCode): void;
}
