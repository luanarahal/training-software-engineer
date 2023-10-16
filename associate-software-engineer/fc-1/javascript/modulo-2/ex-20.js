import { estudantes } from "./ex-19";

const minorOf21 = estudantes.filter(minor => minor.idade < 21);

console.log(minorOf21);
