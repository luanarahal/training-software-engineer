const addFontColor = (hoverText, color) => {
    hoverText.style.color = color;
}

const removeFontColor = (hoverText) => {
    hoverText.style.color = '';
}

document.getElementById("hoverText").addEventListener('mouseover', () => {
    const hoverText = document.getElementById("hoverText");
    addFontColor(hoverText, "blue");
});
document.getElementById("hoverText").addEventListener('mouseout', () => {
    const hoverText = document.getElementById("hoverText");
    removeFontColor(hoverText);
});
