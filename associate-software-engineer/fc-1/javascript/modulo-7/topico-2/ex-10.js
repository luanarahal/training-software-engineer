const pressEnter = (event) => {
    if (event.key === 'Enter') {
        alert('Você pressionou a tecla Enter!');
    };
}

document.addEventListener('keypress', pressEnter);
