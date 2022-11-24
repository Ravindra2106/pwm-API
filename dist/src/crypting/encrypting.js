"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encription = void 0;
const CryptoJS = __importStar(require("crypto-js"));
const ENC_KEY = "F67DAE990151519F6657CB7F33C6C0D4";
const IV = "EB66A46FE81459DA8FD405B2D7804A5E";
class Encription {
    static encrypt(value) {
        var key = CryptoJS.enc.Utf8.parse(ENC_KEY);
        var iv = CryptoJS.enc.Utf8.parse(IV);
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    }
    //The get method is use for decrypt the value.
    static decrypt(value) {
        console.log("encryption1:+++++++++++++++++++++++++++++++++++++");
        var key = CryptoJS.enc.Utf8.parse(ENC_KEY);
        var iv = CryptoJS.enc.Utf8.parse(IV);
        var decrypted = CryptoJS.AES.decrypt(value, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        console.log("----------------------------------", decrypted);
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}
exports.Encription = Encription;
//# sourceMappingURL=encrypting.js.map