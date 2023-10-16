import { estudantes } from "./ex-19.js";

const ageEqualTo21 = estudantes.some(age => age.idade === 21);

console.log(ageEqualTo21);
