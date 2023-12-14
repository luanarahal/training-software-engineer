const students = [
    {
        nome: "Luana",
        idade: 27,
        dataNascimento: "09-12-1996"
    },
    {
        nome: "Adriano",
        idade: 27,
        dataNascimento: "30-05-1996"
    },
    {
        nome: "Natalia",
        idade: 45,
        dataNascimento: "09-03-1978"
    },
    {
        nome: "Marco",
        idade: 46,
        dataNascimento: "13-05-1977"
    }
];

const studentsAbove18 = students.filter(student => student.idade > 18);

console.log(studentsAbove18);
