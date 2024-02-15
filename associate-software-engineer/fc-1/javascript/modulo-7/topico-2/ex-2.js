const showAndHideDiv = () => {
    const toggleDivDisplay = toggleDiv.style.display;

    if (toggleDivDisplay === 'block') {
        toggleDiv.style.display = 'none';
    } else {
        toggleDiv.style.display = 'block';
    }
};

document.getElementById("showAndHideDiv").addEventListener('click', showAndHideDiv);
