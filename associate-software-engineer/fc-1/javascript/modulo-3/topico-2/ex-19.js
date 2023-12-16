import { students } from "./mock.js";

const addStudent = (students, student) => {
    return [...students, student];
};

const newStudent = ({nome: 'Ricardo', idade: 61, dataNascimento: '1961-04-03'});

console.log(addStudent(students, newStudent));
