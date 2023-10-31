const eventos = [...Array(50)].map((_,i) => ({ nome: `Evento${i+1}`, data: new Date(2022+i, 1, 1)}));

function formattedDate(date) {
    const year = date.getFullYear();
    return year;
}

const eventsPerYear = eventos
    .reduce((accumulator, event) => {
        const year = formattedDate(event.data);
        accumulator[year]++;
        return accumulator;
    }, {});

console.log(eventsPerYear);
