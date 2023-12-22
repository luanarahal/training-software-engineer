const addPerson = (person) => {
    return person.push({ birthDate: "1996-12-09" });
}
try {
    //Exemplo de TypeError
    let person = { name: "Luana", age: 27 };
    console.log(addPerson(person));

    //Exemplo de RangeError
    const numbers = new Array(-10);
    console.log(numbers);
} catch (error) {
    if (error instanceof TypeError) {
        console.error("TypeError capturado: " + error.message);
    } else if (error instanceof RangeError) {
        console.error("RangeError capturado: " + error.message);
    } else {
        console.error("Erro desconhecido: " + error.message);
    }
}
