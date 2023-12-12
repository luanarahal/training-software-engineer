let points = 0;
const bonus = 10;

const calculatePoints = (points, bonus) => {
    points += bonus;
    points -= 5;
    return points;
}

console.log(calculatePoints(points, bonus));
