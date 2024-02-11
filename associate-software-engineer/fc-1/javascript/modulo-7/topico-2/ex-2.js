let state = false;

const showAndHideDiv = () => {
    const toggle = document.getElementById("toggleDiv");
    if (!state) {
        toggle.style.display = 'none';
    } else {
        toggle.style.display = 'block';
    }

    state = !state;
};

document.getElementById("showAndHideDiv").addEventListener('click', showAndHideDiv);
