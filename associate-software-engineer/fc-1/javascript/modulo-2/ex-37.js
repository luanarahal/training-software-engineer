import { students } from "./mock.js";

const sumOfAges = students
    .reduce((average, age) => average + age.idade, 0);

const averageAgesStudents = sumOfAges/students.length;

const checkStudentsAboveAverage = students
    .filter(students => students.idade > averageAgesStudents);

console.log(averageAgesStudents);
console.log(checkStudentsAboveAverage);
