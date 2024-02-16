const moveDiv = (animateDiv) => {
    const div = document.getElementById(animateDiv);
    div.style.left = '30px';
}

document.getElementById("moveDiv").addEventListener('click', () => {
    moveDiv("animateDiv")
});
