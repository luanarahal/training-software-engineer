const salesPedro = 100;
const salesMaria = 150;
const salesCarlos = 200;

if (salesPedro > salesMaria && salesPedro > salesCarlos) {
    console.log("Pedro vendeu mais!");
} else if (salesMaria > salesCarlos && salesMaria > salesPedro) {
    console.log("Maria vendeu mais!");
} else {
    console.log("Carlos vendeu mais!");
}
