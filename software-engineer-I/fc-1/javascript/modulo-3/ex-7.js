const blueSky = false;
const niceWeather = false;
const windy = false;

const checkNiceDay = (blueSky, niceWeather, windy) => {
    if ((blueSky || niceWeather) && !windy) {
        return "Ótimo dia para um pequenique";
    } else if ((!blueSky || !niceWeather) && windy) {
        return "Péssimo dia para um pequenique";
    } else {
        return "Não é possível definir";
    }
}

console.log(checkNiceDay(blueSky, niceWeather, windy));
