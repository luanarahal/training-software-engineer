import { students } from "./mock.js";

const addingUpTheAges = students.reduce((average, age) => average + age.idade, 0);
const averageAgeStudents = addingUpTheAges/students.length;

console.log(averageAgeStudents);
