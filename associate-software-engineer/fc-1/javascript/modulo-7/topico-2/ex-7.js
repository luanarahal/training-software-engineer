const addFontColor = () => {
    document.getElementById("hoverText").style.color = "blue";
}

const removeFontColor = () => {
    document.getElementById("hoverText").style.color = '';
}

document.getElementById("hoverText").addEventListener('mouseover', addFontColor);
document.getElementById("hoverText").addEventListener('mouseout', removeFontColor);
