// import { xterm } from "../deps.ts";
// import colors from "./colors.json" assert { type: "json" };

// // Reference:
// // https://github.com/diamondburned/libdb.so/blob/d08ba21baab911f90363ebd97e1a35cd86c4b534/site/components/Terminal/index.svelte#L20
// //

// /**
//  * terminal creates a new xterm terminal.
//  */
// export function terminal(options: TerminalOptions): xterm.Terminal {
//   const terminal = new xterm.Terminal({
//     cols: 80,
//     rows: 24,
//     theme: { ...colors, ...options.colors },
//     tabStopWidth: 2,
//   });
//   terminal.onData((data) => {
//     Deno.stdout.writeSync(new TextEncoder().encode(data));
//   });
//   return terminal;
// }

// export interface TerminalOptions {
//   colors: Record<string, string>;
// }
