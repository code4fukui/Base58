# Base58

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A Base58 encoding/decoding library for the web and Deno.

## Demo
https://code4fukui.github.io/Base58/

## Features
- Base58 encoding and decoding
- ES module for web and Deno

## Usage

```js
import { Base58 } from "https://code4fukui.github.io/Base58/Base58.js";

console.log(Base58.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base58.decode("2Vzei"));
```

## License
MIT