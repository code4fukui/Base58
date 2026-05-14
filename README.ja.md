# Base58

WebおよびDeno向けのBase58エンコード/デコードライブラリです。

## 特徴
- Base58のエンコードおよびデコード
- WebおよびDeno向けのESモジュール

## 使い方

```js
import { Base58 } from "https://code4fukui.github.io/Base58/Base58.js";

console.log(Base58.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base58.decode("2Vzei"));
```

## ライセンス
MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
