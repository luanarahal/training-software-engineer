const punctuation = 30;

if (punctuation >= 90) {
    console.log("Excelente!");
} else if (punctuation >= 75 && punctuation < 90) {
    console.log("Bom!");
} else if (punctuation >= 50 && punctuation < 75) {
    console.log("Regular!");
} else {
    console.log("Precisa melhorar!");
}
