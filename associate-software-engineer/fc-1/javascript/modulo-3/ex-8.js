const salary = 10000;
const salaryIncrease = 30;

const checkSalaryIncrease = (salary, salaryIncrease) => {
    const  salaryIncreased = salary * (salaryIncrease / 100);
    return salary + salaryIncreased;
}

console.log(checkSalaryIncrease(salary, salaryIncrease));
