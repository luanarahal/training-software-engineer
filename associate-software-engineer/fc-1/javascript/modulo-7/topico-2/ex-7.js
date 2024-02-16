const addFontColor = (hoverText, color) => {
    document.getElementById(hoverText).style.color = color;
}

const removeFontColor = (hoverText) => {
    document.getElementById(hoverText).style.color = '';
}

document.getElementById("hoverText").addEventListener('mouseover', () => {
    addFontColor("hoverText", "blue")
});
document.getElementById("hoverText").addEventListener('mouseout', () => {
    removeFontColor("hoverText")
});
