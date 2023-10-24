import { students } from "./mock.js";

function addingUpAges(accumulator, age, index) {
    const addingUp = accumulator + age.idade;
    return addingUp;
}

const sumOfAges = students
    .filter(student => student.nome[0] === 'A')
    .reduce(addingUpAges, 0); 

const averageAge = sumOfAges/((addingUpAges.length) + 1);

console.log(sumOfAges);
console.log(averageAge);
