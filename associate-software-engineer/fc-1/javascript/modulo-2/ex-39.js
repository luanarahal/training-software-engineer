const eventos = [...Array(50)].map((_,i) => ({ nome: `Evento${i+1}`, data: new Date(2022+i, 1, 1)}));

const checkEventsPerYear = eventos
    .reduce((accumulator, event) => {
        const year = event.data.getFullYear();
        accumulator[year] = (accumulator[year] || 0) + 1;
        return accumulator;
    }, {});

console.log(checkEventsPerYear);
