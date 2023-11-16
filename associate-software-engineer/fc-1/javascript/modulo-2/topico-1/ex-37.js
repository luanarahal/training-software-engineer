import { students } from "./mock.js";

const sumOfAges = students
    .reduce((average, age) => average + age.idade, 0);

const averageAgeFromStudents = sumOfAges / students.length;

const checkStudentsAboveAverage = students
    .filter(students => students.idade > averageAgeFromStudents)
    .map(students => `Nome: ${students.nome} - Idade: ${students.idade}`);

console.log(averageAgeFromStudents);
console.log(checkStudentsAboveAverage);
