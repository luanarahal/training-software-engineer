import { estudantes } from "./ex-19.js";

const nameStartingWithA = estudantes.filter(name => name.nome[0] === 'A');

console.log(nameStartingWithA);
