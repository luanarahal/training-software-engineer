import { students } from "./mock.js";

const checkStudentsWithSameAge = (currentStudent, index, students) => {
    return students.filter(student => student.idade === currentStudent.idade).length > 1;
}

console.log(students.some(checkStudentsWithSameAge));