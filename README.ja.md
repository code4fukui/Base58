# Base58

Base58 は、ウェブおよびDenoで使用できるBase58エンコーディング/デコーディングライブラリです。

## デモ
https://code4fukui.github.io/Base58/

## 機能
- Base58エンコーディングとデコーディング
- ウェブおよびDenoのためのESモジュール

## 使い方

```js
import { Base58 } from "https://code4fukui.github.io/Base58/Base58.js";

console.log(Base58.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base58.decode("2Vzei"));
```

## ライセンス
MIT