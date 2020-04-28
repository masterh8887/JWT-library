"use strict";

export function encode(str: string): string {
  if (
    Buffer.byteLength(str) !== str.length ||
    Buffer.byteLength(str) === 0 ||
    str.length === 0
  )
    throw new Error("bad string or empty string data");
  return Buffer.from(str, "binary").toString("base64");
}

export function urlEncode(str: string): string {
  if (
    Buffer.byteLength(str) !== str.length ||
    Buffer.byteLength(str) === 0 ||
    str.length === 0
  )
    throw new Error("bad string or empty string data");

  return str.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
