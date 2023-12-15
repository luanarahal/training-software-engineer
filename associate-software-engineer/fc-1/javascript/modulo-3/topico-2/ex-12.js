import { students } from "./mock.js";

function averageAge() {
    const sumAges = students.reduce((total, age) => total + age.idade, 0);
    const averageAges = sumAges/students.length;
    return averageAges;
}

console.log(`A média da idade dos estudantes é ${averageAge()}`);
