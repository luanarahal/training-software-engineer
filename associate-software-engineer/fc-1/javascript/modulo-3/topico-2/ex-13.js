import { students } from "./mock.js";

function verifyYoungerStudent() {
    const youngerStudent = students.sort((student1, student2) => student1.idade - student2.idade);
    return youngerStudent[0];
}

console.log(verifyYoungerStudent());
