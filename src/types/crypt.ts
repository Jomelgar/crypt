export abstract class Crypter {
    constructor() {}
    abstract crypt(word: string): string;
    abstract decrypt(word: string): string;
}
