export const isMonthTheSame = (birthDate, monthNumber) => {
    const date = new Date(birthDate);
    const month = date.getMonth();
    return month === monthNumber;
}

export const getMonthNumber = (monthName) => { 
    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'    
    ]
    return monthNames.indexOf(monthName);
}

export const calculateAge = (dateOfBirth) => {
    const currentDate = new Date();
    const birthDate = new Date(dateOfBirth);
    const ageInMilliseconds = currentDate - birthDate;
    return Math.floor(convertedMilliSecondsToYear(ageInMilliseconds));
}

export const convertedMilliSecondsToYear = (ageInMilliseconds) => {
    return ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;
}
