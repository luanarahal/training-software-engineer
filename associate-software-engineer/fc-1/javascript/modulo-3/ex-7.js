const isBlueSky = false;
const isNiceWeather = false;
const isWindy = false;

const isGoodDayForPicnic = (blueSky, niceWeather, windy) => {
    if ((blueSky && niceWeather) && !windy) {
        return "Ótimo dia para um pequenique";
    } else {
        return "Péssimo dia para um pequenique";
    }
}

console.log(isGoodDayForPicnic(isBlueSky, isNiceWeather, isWindy));
