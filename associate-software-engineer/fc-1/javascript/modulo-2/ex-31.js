import { students } from "./mock.js";

const howManyStudentsOverTwentyTearsOld = 
    students.filter(student => student.idade >= 20).length;

        
console.log(howManyStudentsOverTwentyTearsOld);
