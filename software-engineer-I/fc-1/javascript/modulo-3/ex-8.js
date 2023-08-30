const salary = 10000;
const salaryIncrease = 30;

const checkSalaryIncrease = (salary, salaryIncrease) => {
    const updatedSalary = salary + salary * (salaryIncrease/100);
    return updatedSalary;
}

console.log(checkSalaryIncrease(salary, salaryIncrease));
