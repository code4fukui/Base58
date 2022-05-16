import { Base58 } from "./Base58.js";
import { bincat } from "https://code4sabae.github.io/js/binutil.js";

const MULTIBASE_BASE58BTC_HEADER = 'z';
// multicodec ed25519-pub header as varint
const MULTICODEC_ED25519_PUB_HEADER = new Uint8Array([0xed, 0x01]);
// multicodec ed25519-priv header as varint
const MULTICODEC_ED25519_PRIV_HEADER = new Uint8Array([0x80, 0x26]);

export const Base58BTC = {
  encodePublicKey: (publicKey) => {
    return MULTIBASE_BASE58BTC_HEADER + Base58.encode(bincat(
      MULTICODEC_ED25519_PUB_HEADER,
      publicKey
    ));
  },
  encodePrivateKey: (privateKey) => {
    return MULTIBASE_BASE58BTC_HEADER + Base58.encode(bincat(
      MULTICODEC_ED25519_PRIV_HEADER,
      privateKey
    ));
  },
  decode: (input) => { // { name: "publicKey", publicKey: bin } or { name: "privateKey", privateKey: bin }
    throw "TBD";
  },
};
