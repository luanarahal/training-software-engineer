const generateColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const changeBackgroundColor = (element) => {
    const color = generateColor();
    element.style.backgroundColor = color;
}

const changeBodyBackgroundColor = () => {
    changeBackgroundColor(document.body);
}

document.getElementById("changeBackgroundColor").addEventListener('click', changeBodyBackgroundColor);
