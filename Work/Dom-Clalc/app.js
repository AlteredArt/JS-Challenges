const buttons = document.querySelectorAll(".buttons span not:(#equals)");
const screen = document.querySelectorAll("#screen");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelectorAll("#equals");
    buttons.forEach(assignEventListener);
    equals.addEventListener("click", event => {
        const stringAsArray = screen.textContent.split('');
        const stringToEval = stringAsArray
        .map(character => {
            if (character === "%") {
                return "/";
            } else if (character === "x") {
                return "*";
            } else {
                return character;
            }
        }) 
        .join("");
    screen.textContent = eval(stringToEval);
    })

    function assignEventListener(button) {
        button.addEventListener("click", addTextToScreen);
    }

    function addTextToScreen(event){
        const buttonText = event.target.textContent;
        screen.textContent += buttonText;
    }