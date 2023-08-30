const width = 100;
const length = 90;

const calculatePerimeterandAreaofRectangle = (width, length) => {
    const perimeter = (width * 2) + (length * 2);
    const area = width * length;
    return `O perímetro do retângulo é ${perimeter}, e a área do retângulo é ${area}`;
}

console.log(calculatePerimeterandAreaofRectangle(width, length));
