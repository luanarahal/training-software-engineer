import { estudantes } from "./ex-19.js";

const over19YearsOld = estudantes.every(age => age.idade >= 19);

console.log(over19YearsOld);
