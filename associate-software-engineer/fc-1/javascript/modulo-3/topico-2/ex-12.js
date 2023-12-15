import { students } from "./mock.js";

const sumAges = students
    .reduce((total, age) => total + age.idade, 0);

const averageAges = sumAges/students.length;

console.log(`A média da idade dos estudantes é ${averageAges}`);
