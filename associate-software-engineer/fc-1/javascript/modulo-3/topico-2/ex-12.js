import { students } from "./mock.js";

function averageAge(students) {
    const sumAges = students
        .reduce((total, age) => total + age.idade, 0);
    return sumAges/students.length;
}

console.log(`A média da idade dos estudantes é ${averageAge(students)}`);
