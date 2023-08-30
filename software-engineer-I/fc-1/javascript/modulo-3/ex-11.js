const price = 1000;
const discount = 10;
const tax = 10;

const calculateFinalValue = (price, discount, tax) => {
    const discountValue = price * (discount / 100);
    const taxValue = price * (tax / 100);
    return (price - discountValue) + taxValue; 
}

console.log(calculateFinalValue(price, discount, tax));
