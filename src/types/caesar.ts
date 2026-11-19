import { Crypter } from "./crypt.ts";

export class Caesar extends Crypter{
    private num : number;
    constructor(num : number){
        super();
        this.num = num;
    }

    public crypt(word: string): string {
        let  hashed :string  = "";
        for(let i = 0; i < word.length; i++){
            hashed += String.fromCharCode(word.charCodeAt(i) + this.num);
        }

        return hashed;
    }

    public decrypt(word: string): string {
        let  hashed :string  = "";
        for(let i = 0; i < word.length; i++){
            hashed += String.fromCharCode(word.charCodeAt(i) - this.num);
        }

        return hashed;
    }
}