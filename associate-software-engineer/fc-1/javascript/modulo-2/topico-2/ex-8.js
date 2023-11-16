const cars = [
    {
        brand: "volks",
        model: "gol",
        year: 2020
    },
    {
        brand: "fiat",
        model: "uno",
        year: 2015
    },
    {
        brand: "bmw",
        model: "x1",
        year: 2010
    }
];

const find2020YearCar = cars.find(car => car.year === 2020);

if (find2020YearCar) {
    console.log(find2020YearCar);
} else {
    console.log(`Nenhum carro encontrado com ano 2020`);
}
