const price = 1000;
const discount = 10;
const tax = 10;

const calculateFinalValue = (price, discount, tax) => {
    const finalValue = price - (price * (discount/100)) + tax; 
    return finalValue;
}

console.log(calculateFinalValue(price, discount, tax));
