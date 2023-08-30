const grade1 = 10;
const grade2 = 8;
const grade3 = 6;
const weight1 = 10;
const weight2 = 20;
const weight3 = 30;

const calculateWeightedAverage = (g1, g2, g3, w1, w2, w3) => {
    const weightedAverage = ((g1 * w1) + (g2 * w2) + (g3 * w3)) / (w1 + w2 + w3);
    return weightedAverage;
}

console.log(calculateWeightedAverage(grade1, grade2, grade3, weight1, weight2, weight3));
