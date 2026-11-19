import {Crypter} from "./crypt.ts";
export class Vigenere extends Crypter{
    private key: string;
    private readonly MIN_CHAR = 32; 
    private readonly MAX_CHAR = 126; 
    private readonly RANGE = 95;     

    constructor(key: string) {
        super();
        this.key = key;
    }

    public crypt(text: string): string {
        if (!this.key) return text;
        let result = "";

        for (let i = 0; i < text.length; i++) {
            const textCode = text.charCodeAt(i);
            const keyCode = this.key.charCodeAt(i % this.key.length);

            if (textCode >= this.MIN_CHAR && textCode <= this.MAX_CHAR) {
                const textShift = textCode - this.MIN_CHAR;
                const keyShift = (keyCode - this.MIN_CHAR) % this.RANGE;
                
                const encryptedCode = ((textShift + keyShift) % this.RANGE) + this.MIN_CHAR;
                result += String.fromCharCode(encryptedCode);
            } else {
                result += text[i];
            }
        }

        return result;
    }

    public decrypt(text: string): string {
        if (!this.key) return text;
        let result = "";

        for (let i = 0; i < text.length; i++) {
            const textCode = text.charCodeAt(i);
            const keyCode = this.key.charCodeAt(i % this.key.length);

            if (textCode >= this.MIN_CHAR && textCode <= this.MAX_CHAR) {
                const textShift = textCode - this.MIN_CHAR;
                const keyShift = (keyCode - this.MIN_CHAR) % this.RANGE;
        
                const decryptedCode = ((textShift - keyShift + this.RANGE) % this.RANGE) + this.MIN_CHAR;
                result += String.fromCharCode(decryptedCode);
            } else {
                result += text[i];
            }
        }

        return result;
    }
}
