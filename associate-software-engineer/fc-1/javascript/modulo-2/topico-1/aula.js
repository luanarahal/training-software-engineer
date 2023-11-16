const pets = ['sol', 'ivy', 'buço', 'snoopy'];

// console.log(pets[2]);

// pets.push('pierre');
// console.log(pets);

// pets.pop();
// console.log(pets);

// pets.shift();
// console.log(pets);

// pets.unshift('sol');
// console.log(pets);

// pets.unshift(['pierre', 'pit', 'pam', 'remy', ['paty', 'oi', 'tudo bem?']]);
// console.log(pets);

// console.log(pets[0][1]);
// console.log(pets[0][4][0]);

const fruits = ['banana', 'maçã', 'pêssego', 'tomate', 'limão', 'melão', 'laranja'];

// let blah = fruits.slice(2, fruits.length+1); 

// console.log(fruits);
// console.log(blah);

// fruits.splice(2, 4);
// console.log(fruits);

// const cars = ['mc laren', 'audi', 'porsche', 'lamborghini', 'bmw'];
// const moto = ['triumph', 'harley', 'ducati', 'royal enfield', 'yamaha', 'honda'];

// const together = cars.concat(moto);
// console.log(together);

// const fullName = ['luana', 'rahal', 'luz'];

// console.log(fullName);
// const name1 = fullName.reverse();
// console.log(name1);

// fullName.forEach((item, index)=>{
//     console.log(`${index} ${item}`);
// });

// cars.forEach((item, index)=> {
//     console.log(`Posição ${index}: ${item}`);
// })

// moto.forEach((item, index)=> {
//     console.log(`Pole position: ${index} ${item}`);
// });

// fruits.forEach((item, index, together)=> {
//     console.log(`Qual é sua fruta? ${index}: ${item} [${together}]`);
// });

// pets.forEach((item)=> {
//     console.log(`Oi, ${item}!`);
// });

// const gastos = [10, 20, 50, 60, 80];

// const gastosDollar = gastos.map((number)=>number / 5); 

// console.log(gastosDollar);

// const marcas = ['ferrari', 'honda', 'mc laren'];

// const marca = marcas.filter((value)=>{
//     return value === 'ferrari';
// });

// console.log(marca);

// const sumGastosDollar = gastosDollar.reduce((total, value)=>{
//     return total + value;
// }, 0); 

// console.log(sumGastosDollar);

// const totalDollar = gastos.map((number)=>number / 5).reduce((total, value)=>total + value, 0); 

// console.log(totalDollar)

// const marcas = ['ferrari', 'honda', 'ferrari'];

// const marca = marcas.find((value)=>{
//     return value === 'ferrari';
// });

// console.log(marca);

const numbers = [0, 2, 4, 6, 8];

// const verify = numbers.some((value)=> {
//     return value % 2 !== 0;
// });

// console.log(verify);

numbers.sort((atual, proximo) => {
    return proximo - atual;
});

console.log(numbers);
