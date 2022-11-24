import * as CryptoJS from 'crypto-js';

const ENC_KEY = "F67DAE990151519F6657CB7F33C6C0D4";
const IV = "EB66A46FE81459DA8FD405B2D7804A5E";
export class Encription{
    
        static   encrypt(value:any){        
                    var key = CryptoJS.enc.Utf8.parse(ENC_KEY);
                    var iv = CryptoJS.enc.Utf8.parse(IV);
                    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
                    {
                        keySize: 128 / 8,
                        iv: iv,
                        mode: CryptoJS.mode.CBC,
                        padding: CryptoJS.pad.Pkcs7
                    });
                    return encrypted.toString();
        }
      //The get method is use for decrypt the value.
        static decrypt(value:any){
            console.log("encryption1:+++++++++++++++++++++++++++++++++++++");
                var key = CryptoJS.enc.Utf8.parse(ENC_KEY);
                var iv = CryptoJS.enc.Utf8.parse(IV);
      
                var decrypted = CryptoJS.AES.decrypt(value, key, {
                    keySize: 128 / 8,
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                   
                });
console.log("----------------------------------",decrypted);
            return decrypted.toString(CryptoJS.enc.Utf8);
        }
}