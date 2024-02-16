const paragraph = document.getElementById("paragraph");

document.getElementById("buttonChangeText").addEventListener('click', () => {
    paragraph.textContent = "Texto alterado!";
});
