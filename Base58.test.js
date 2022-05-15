import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base58 } from "./Base58.js";

Deno.test("encode", () => {
  t.assertEquals(Base58.encode(new Uint8Array([1, 2, 3])), "Ldp");
});
Deno.test("decode", () => {
  t.assertEquals(Base58.decode("Ldp"), new Uint8Array([1, 2, 3]));
});
