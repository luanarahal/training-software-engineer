import { students } from "./mock.js";

const removeStudent = (students, name) => {
    const indexToRemove = students.findIndex(student => student.nome === name);
    students.splice(indexToRemove, 1)
    return students;
}

console.log(removeStudent(students, "Natalia"));
