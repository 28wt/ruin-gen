function buttonCreator(
    buttonText = "Button text missing",
    clickHandler = () => console.log(buttonText + "missing handler"),
    parent = document.getElementById("mainMenu"),
){
    // Create a div with class "button" under div id="contextMenu"
    const button = document.createElement("div");
    button.className = "button";
    button.innerText = buttonText;
    button.addEventListener('click', (event) => {
        clickHandler(event)
        event.stopPropagation()
    })
    parent.appendChild(button);    
}
