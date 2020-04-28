//import * as base64 from "./lib/base64";
import * as Base64 from "./lib/base64_class";
import crypto from "crypto";

// header object 세팅
const header: any = {
  alg: "HS256",
  typ: "JWT",
};

// payload object 세팅
const payload: any = {
  sub: "1234567890",
  name: "John Doe",
  iat: 1516239022,
};

// seacreatKey 플레인 텍스트
const seacretKey: string = "your-256-bit-secret";

// header base64urlencode
const encodeHeader: string = Base64.encode(JSON.stringify(header));

// // payload base64urlencode
// const encodePayload: string = base64UrlEncode(JSON.stringify(payload));

// const hmac = crypto.createHmac("sha256", seacretKey);
// hmac.update(`${encodeHeader}.${encodePayload}`);
// console.log(hmac.digest("base64"));

//const signature : string = atob(hmacSHA256(`${encodeHeader}.${encodePayload}`, seacretKey));

//   console.log(encodePayload);

//  // payload base64urlencode
// const urlEncodePayload = encodePayload.replace(/=/g, "")
//  .replace(/\+/g, "-")
//  .replace(/\//g, "_")

// const test = '{"alg":"HS256","typ":"JWT"}';
// //const test = '';
// const encodeTest = base64Encode(test);
// const decodeTest = base64Decode(encodeTest);
// console.log(`encodeTest = ${encodeTest}`);
// console.log(`decodeTest = ${decodeTest}`);
