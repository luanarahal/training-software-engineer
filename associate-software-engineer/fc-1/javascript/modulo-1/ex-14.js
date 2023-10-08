const ages = {
    age1: 30,
    age2: 40,
    age3: 50,
};
let biggestValue = 0;

for (let propriedade in ages) {
    if (ages[propriedade] > biggestValue) {
        biggestValue = ages[propriedade];
    }
}

console.log(biggestValue);
