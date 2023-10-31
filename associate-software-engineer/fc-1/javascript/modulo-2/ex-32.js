import { students } from "./mock.js";

const studentsWithSameAge = (currentStudent, index, students) => {
    return students
        .filter(student => student.idade === currentStudent.idade).length > 1;
}

const checkStudentsOfTheSameAge = (students.some(studentsWithSameAge));

console.log(checkStudentsOfTheSameAge);
