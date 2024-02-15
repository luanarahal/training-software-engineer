const addItemInList = () => {
    const list = document.getElementById("itemList");
    const newItem = document.createElement("li");
    const textNewItem = document.createTextNode("Oi!");
    newItem.appendChild(textNewItem);
    list.appendChild(newItem);
};

document.getElementById("addItem").addEventListener('click', addItemInList);
