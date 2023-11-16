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

const addAvailable = cars.map(car => car.status = 'available');
console.log(cars);
