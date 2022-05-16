# Base58

- Base58 library ([Original implementation from base-x](https://github.com/cryptocoinjs/base-x))
- ES module for web and [Deno](https://deno.land)

## sample app

https://code4fukui.github.io/Base58/

## usage

```js
import { Base58 } from "https://code4fukui.github.io/Base58/Base58.js";

console.log(Base58.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base58.decode("2Vzei"));
```
