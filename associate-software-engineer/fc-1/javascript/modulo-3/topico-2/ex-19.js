import { students } from "./mock.js";

const addNewStudent = ((student) => {
    return students.push(student);
});

addNewStudent({nome: 'Ricardo', idade: 61, dataNascimento: '1961-04-03'});
console.log(students);
