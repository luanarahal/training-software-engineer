const moveElement = (element) => {
    element.style.left = '30px';
}

document.getElementById("moveDiv").addEventListener('click', () => {
    const animateDiv = document.getElementById("animateDiv");
    moveDiv(animateDiv);
});
