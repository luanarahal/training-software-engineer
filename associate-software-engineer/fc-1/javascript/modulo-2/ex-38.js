const people = [...Array(50)].map((_,i) => ({ nome:  `Pessoa${i+1}`, dataNascimento: new Date(1950+i, 0, 1) }));

function formattedDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day.toString().padStart(2, '0');
    const formattedMonth = month.toString().padStart(2, '0');

    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
    return formattedDate;
}

const olderPeople = people
    .filter(person => person.dataNascimento < new Date('1990-01-01'))
    .sort((older, person) => older.dataNascimento - person.dataNascimento)
    .map(person => `${person.nome} - Data de nascimento: ${formattedDate(person.dataNascimento)}`)[0];

if (people.length > 0) {
    console.log(`A pessoa mais velha que nasceu antes de 01-01-1990 é: ${olderPeople}`);
} else {
    console.log("Não há pessoas nesta lista!");
}
