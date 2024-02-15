const moveDiv = () => {
    const animateDiv = document.getElementById("animateDiv");
    animateDiv.style.left = '30px';
}

document.getElementById("moveDiv").addEventListener('click', moveDiv);
