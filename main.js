function generateRuin() {
    // Placeholder for ruin generation logic
    alert('Generating ruin...');
}

function saveRuin() {
    // Placeholder for saving the generated ruin
    alert('Saving ruin...');
}

function loadRuin() {
    // Placeholder for loading a saved ruin
    alert('Loading ruin...');
}
function onClickAlert(event) {
    console.log(event);
    event.stopPropagation()
}

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const menu = document.getElementById('mainMenu');
    menu.style.display = 'block';
    menu.style.left = `${event.pageX}px`;
    menu.style.top = `${event.pageY}px`;
});

document.addEventListener('click', () => {
    const menu = document.getElementById('mainMenu');
    menu.style.display = 'none';
});

document.getElementById("mainMenu").childNodes.forEach(element => {
    if (element.className == "button"){
        element.title = element.innerText;
    }
});

buttonCreator("eeeeeeeeeeeeeeeee1", onClickAlert)
buttonCreator("Option 2", () => alert('Option 2'))
buttonCreator("Option 3", () => alert('Option 3'))
