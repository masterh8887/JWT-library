//import * as base64 from "./lib/base64";
import * as Base64 from "./lib/base64";
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

// header base64encode
const basicHeader: string = Base64.encode(JSON.stringify(header));
// header base64URLencode
const urlEncodeHeader: string = Base64.toUrlEncode(basicHeader);

console.log(`urlEncodeHeader =  ${urlEncodeHeader}`);

// payload base64encode
const basicPayload: string = Base64.encode(JSON.stringify(payload));
// payload base64URLencode
const urlEncodePayload: string = Base64.toUrlEncode(basicPayload);
console.log(`urlEncodePayload =  ${urlEncodePayload}`);

const hmac = crypto.createHmac("sha256", seacretKey);
const signature = Base64.toUrlEncode(
  hmac.update(`${urlEncodeHeader}.${urlEncodePayload}`).digest("base64")
);
console.log(`signature =  ${signature}`);

const token = `${urlEncodeHeader}.${urlEncodePayload}.${signature}`;

console.log(`token =  ${token}`);
