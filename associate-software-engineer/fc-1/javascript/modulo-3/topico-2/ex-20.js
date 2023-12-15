import { students } from "./mock.js";

const removeStudent = (person) => {
    const indexToRemove = students.findIndex(student => student.nome === person);
    return students.splice(indexToRemove, 1);
}

removeStudent("Natalia");
console.log(students);
