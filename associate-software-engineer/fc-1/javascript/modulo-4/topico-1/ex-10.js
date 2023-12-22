const rangeAgeStudents = (age) => {
    if (!age || age < 0) {
      throw new Error("Digite um número positivo!");
    } 
    if (age > 0 && age <= 18) {
      return "0-18";
    } else if (age > 18 && age <= 60) {
      return "18-60";
    } else {
      return "60+";
    }
};

try {
    console.log(`O range da idade digitado é de: ${rangeAgeStudents(10)}`);
} catch (error) {
    console.error(error.message);
}
