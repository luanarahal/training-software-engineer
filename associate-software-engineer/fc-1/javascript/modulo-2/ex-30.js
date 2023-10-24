import { students } from "./mock.js";

const namesWithMoreThreeCharacters = 
    students
        .filter(student => student.nome.length > 3)
        .map(student => student.nome);

console.log(namesWithMoreThreeCharacters);
