import { students } from "./mock.js";

const addNewStudent = ((nome, idade, dataNascimento) => {
    return students.push({nome, idade, dataNascimento});
});

addNewStudent("Ricardo", 61, "1961-04-03");
console.log(students);