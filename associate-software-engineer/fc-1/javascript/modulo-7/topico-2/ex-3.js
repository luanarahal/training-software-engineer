const generateColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const changeBackgroundColor = () => {
    const color = generateColor();
    document.body.style.backgroundColor = color;
}

document.getElementById("changeBackgroundColor").addEventListener('click', changeBackgroundColor);
