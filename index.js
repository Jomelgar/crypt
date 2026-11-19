import { Caesar } from "./src/types/caesar.ts";
import { Vigenere } from "./src/types/viginere.ts";
import { Spartan } from "./src/types/spartan.ts";

const texto = process.argv[2] || "Hola mundo";

const metodos = [
    { nombre: "César", cifrador: new Caesar(3) },
    { nombre: "Vigenère", cifrador: new Vigenere("CLAVE") },
    { nombre: "Espartano", cifrador: new Spartan(3) },
];

console.log(`Texto original: ${texto}\n`);

for (const { nombre, cifrador } of metodos) {
    const textoCifrado = cifrador.crypt(texto);
    const textoDescifrado = cifrador.decrypt(textoCifrado);

    console.log(`Método: ${nombre}`);
    console.log(`Cifrado: ${textoCifrado}`);
    console.log(`Descifrado: ${textoDescifrado}\n`);
}
