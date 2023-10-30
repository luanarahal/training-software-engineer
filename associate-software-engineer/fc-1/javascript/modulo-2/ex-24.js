import { students } from "./mock.js";

const sumOfAges = students.reduce((average, age) => 
    average + age.idade, 0);
const averageAgeStudents = sumOfAges/students.length;

console.log(averageAgeStudents);
