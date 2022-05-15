import { decode, encode } from "./baseN.js";

export const BASE58_CHARS = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

export const Base58 = {
  encode: (input, maxline) => encode(input, BASE58_CHARS, maxline),
  decode: (input) => decode(input, BASE58_CHARS),
};
