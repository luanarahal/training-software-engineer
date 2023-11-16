const grade = 10;

switch(grade) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Você está reprovado!");
        break;
    case 7:
        console.log("Você está de recuperação!");
        break;        
    case 8:
    case 9:
    case 10:
        console.log("Você está aprovado!");
        break;
    default:
        console.log("Digite uma nota de 0 a 10");
        break;
}
