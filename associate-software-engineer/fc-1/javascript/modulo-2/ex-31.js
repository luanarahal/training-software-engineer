import { students } from "./mock.js";

const studentsOver20 = 
    students.filter(student => student.idade >= 20).length;

        
console.log(studentsOver20);
