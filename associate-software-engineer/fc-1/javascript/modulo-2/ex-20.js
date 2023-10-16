import { estudantes } from "./ex-19.js";

const minorOf21 = estudantes.filter(minor => minor.idade < 21);

console.log(minorOf21);
