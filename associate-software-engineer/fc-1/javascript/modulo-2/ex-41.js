const eventos = [...Array(50)].map((_,i) => ({ nome: `Evento${i+1}`, data: new Date(2022+i, 1, 1) }));

const findEventsInATimeRange = eventos
    .filter(event => {
        const year = event.data.getFullYear();
        if(year >= 2030 && year <= 2040) {
            return true;
        }
    })

console.log(findEventsInATimeRange);
