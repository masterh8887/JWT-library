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

export function toUrlEncode(str: string): string {
  if (
    Buffer.byteLength(str) !== str.length ||
    Buffer.byteLength(str) === 0 ||
    str.length === 0
  )
    throw new Error("bad string or empty string data");

  return str.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

export function decode(str: string): string {
  if (
    Buffer.byteLength(str) !== str.length ||
    Buffer.byteLength(str) === 0 ||
    str.length === 0
  )
    throw new Error("bad string or empty string data");

  return Buffer.from(str, "base64").toString();
}

export function toBase64(str: string): string {
  if (
    Buffer.byteLength(str) !== str.length ||
    Buffer.byteLength(str) === 0 ||
    str.length === 0
  )
    throw new Error("bad string or empty string data");

  return str.toString().replace(/\-/g, "+").replace(/_/g, "/");
}
