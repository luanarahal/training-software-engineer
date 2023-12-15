import { students } from "./mock.js";

const removeStudent = (name) => {
    const indexToRemove = students.findIndex(student => student.nome === name);
    return students.splice(indexToRemove, 1);
}

removeStudent("Natalia");
console.log(students);
