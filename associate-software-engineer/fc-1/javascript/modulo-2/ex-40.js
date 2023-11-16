const pessoas = [...Array(50)].map((_,i) => ({ nome: `Pessoa${i+1}`, dataNascimento: new Date(1950+i, 1, 1) }));
const eventos = [...Array(50)].map((_,i) => ({ nome: `Evento${i+1}`, data: new Date(2022+i, 1, 1) }));

const peopleWithNearestEvent = pessoas.map(pessoa => {
    const findEventsDates = eventos.filter(event => event.data > pessoa.dataNascimento);
    
    const nearestEvent = findEventsDates.reduce((previous, current) => {
        return previous.data < current.data ? previous : current;
    });

    return {
        pessoa: pessoa.nome, 
        dataNascimento: pessoa.dataNascimento,
        eventoMaisProximo: nearestEvent.nome, 
        dataEventoMaisProximo: nearestEvent.data
    };
});

console.log(peopleWithNearestEvent);
