import { estudantes } from "./ex-19.js";

const averageAgeStudents = estudantes.reduce((average, age) =>  average + age.idade, 0)/estudantes.length;

console.log(averageAgeStudents);
