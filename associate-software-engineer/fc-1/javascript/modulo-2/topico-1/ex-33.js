import { students } from "./mock.js";

const addingUpAges = (accumulator, student, index) => {
    return accumulator + student.idade;
}

const sumOfAges = students
    .filter(student => student.nome[0] === 'A')
    .reduce(addingUpAges, 0); 

const studentsStartingNameWithA = students.filter(student => student.nome[0] === 'A');

const averageAge = sumOfAges / studentsStartingNameWithA.length;

console.log(`Soma das idades: ${sumOfAges}`);
console.log(`Média das idades: ${averageAge}`);
