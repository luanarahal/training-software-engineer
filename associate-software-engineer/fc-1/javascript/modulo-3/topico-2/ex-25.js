import { students } from "./mock.js";

const convertMilliSecondsToDays = (milliseconds) => {
    return Math.round(milliseconds / 1000 / 60 / 60 / 24);
} 

const getDaysToBirthday = (birthDate) => {
    const currentDate = new Date();
    const birthDateObj = new Date(birthDate);
    const nextBirthdayDate = new Date(currentDate.getFullYear(), birthDateObj.getMonth(), birthDateObj.getDate() + 1);
    if (currentDate > nextBirthdayDate) {
        nextBirthdayDate.setFullYear(currentDate.getFullYear() + 1);
    }
    return convertMilliSecondsToDays(nextBirthdayDate - currentDate);
}

students.forEach(student => {
    student.daysToBirthday = getDaysToBirthday(student.dataNascimento);
});

console.log(students);
