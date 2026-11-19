import { Crypter } from "./crypt.ts";

export class Spartan extends Crypter {
    private num : number;
    constructor(num : number){
        super();
        this.num = num;
    }
    
    public crypt(word: string): string {
        if(this.num <= 1 || this.num >= word.length) return word;
        
        let hashed : string[] = [];
        
        for (let col = 0; col < this.num; col++) {
            for (let i = col; i < word.length; i += this.num) {
              hashed.push(word[i]);
            }
          }

        return hashed.join('');
    }

    public decrypt(word: string): string {
        if(this.num <= 1 || this.num >= word.length) return word; 
        
        const rows = Math.ceil(word.length / this.num);
        const remainder = word.length % this.num;
        const fullCols = remainder === 0 ? this.num : remainder;
        const matrix: string[][] = Array.from({ length: rows }, () => new Array(this.num).fill(''));
        let index = 0;

        for (let col = 0; col < this.num; col++) {
            const colHeight = col < fullCols ? rows : rows - 1;

            for (let row = 0; row < colHeight; row++) {
                matrix[row][col] = word[index];
                index++;
            }
        }

        return matrix.map(row => row.join('')).join('');
    }
};