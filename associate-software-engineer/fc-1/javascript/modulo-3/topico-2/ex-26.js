import { students } from "./mock.js";

const sortStudentsByBirthDate = (students) => {
    return students
        .sort((student1, student2) => new Date(student2.dataNascimento) - new Date(student1.dataNascimento));
} 

console.log(sortStudentsByBirthDate(students));
