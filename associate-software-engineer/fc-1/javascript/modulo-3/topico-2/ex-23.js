import { students } from "./mock.js";

function verifyOlderStudent(students) {
    return students.sort((student1, student2) => student2.idade - student1.idade)[0];
}

console.log(verifyOlderStudent(students));
