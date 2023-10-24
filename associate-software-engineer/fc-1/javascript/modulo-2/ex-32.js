import { students } from "./mock.js";

const thereAreStudentsOfTheSameAge =
    students
        .filter(student => student.idade > 25)
        .some(student => student.idade === student.idade);   

console.log(thereAreStudentsOfTheSameAge);
