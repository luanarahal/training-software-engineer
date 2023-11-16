const ages = {
    age1: 30,
    age2: 40,
    age3: 50,
};
let biggestValue = 0;

for (let properties in ages) {
    if (ages[properties] > biggestValue) {
        biggestValue = ages[properties];
    }
}

console.log(biggestValue);
