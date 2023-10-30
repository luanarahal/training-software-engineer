import { students } from "./mock.js";

function addingUpAges(accumulator, student, index) {
    return accumulator + student.idade;
}

const sumOfAges = students
    .filter(student => student.nome[0] === 'A')
    .reduce(addingUpAges, 0); 

const averageAge = sumOfAges/((addingUpAges.length) + 1);

console.log(students.filter(student => student.nome[0] === 'A'))
console.log(`Soma das idades: ${sumOfAges}`);
console.log(`Média das idades: ${averageAge}`);
