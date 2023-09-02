const width = 100;
const length = 90;

const calculatePerimeterAndAreaOfRectangle = (width, length) => {
    const perimeter = 2 * (width + length);
    const area = width * length;
    return `O perímetro do retângulo é ${perimeter}, e a área do retângulo é ${area}`;
}

console.log(calculatePerimeterAndAreaOfRectangle(width, length));
