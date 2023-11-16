// const car = {
//     model: "volks",
//     color: "white",
//     type: "suv"
// }

// const car2 = new Object();
// car2.model = "bmw";
// car2.color = "black";
// car2.type = "sport";

// console.log(car2);

// car2.name = "m3";

// console.log(car2);

// car2.name = "m2";

// delete car2.name;

// for (let key in car2) {
//     console.log(`${key} -> ${car2[key]}`)
// }

// console.log(car2);
// console.log(car.type);

// const cars = new Map();

// console.log(cars);

const cars = new Map([
    ['chave1', 'valor1'],
    ['chave2', 'valor2']
]);

cars.set('chave1', 'novoValor1');

cars.set('keys1', {
    brand: 'bmw',
    model: {
        name: 'm2',
        caracteriticas: {
            color: 'white'
        }
    }
});

// console.log(cars);
// console.log(cars.get('keys1'));
// console.log(cars.has('keys1'));

// cars.delete('chave2')
// console.log(cars)

// cars.forEach((value, key) => {
//     console.log(key, value);
// })

for (let [key, value] of cars) {
    console.log(key, value)
}

