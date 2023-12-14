function createMultiplier(factor) {
    return function(number) {
        return factor * number;
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
  
console.log(double(5));
console.log(triple(5));
