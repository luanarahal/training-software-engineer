const string1 = "Luana";
const string2 = "Adriano";

const compareStrings = (string1, string2) => {
    if (string1 === string2) {
        return "As strings são iguais";
    } else {
        return "As string são diferentes";
    }
}

console.log(compareStrings(string1, string2));
