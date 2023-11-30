const door = document.querySelector(".door");
const numbersDivs = document.querySelectorAll(".number");
const displayDiv = document.querySelector(".display");
let code = "";
const passcode = "5498";
// element.addEventListener("click", toggleDoor);

numbersDivs.forEach((numberDiv) => {
    numberDiv.addEventListener('click', addNumber);
})

function addNumber(event) {
    // console.log(event.target.innerText);
    code += event.target.innerText;
    displayDiv.innerText = code;

    if (code.length >= 4) {
        checkCode()
    }
}

function checkCode() {
    if (code === passcode) {
        flashDisplay('green');
        toggleDoor();
    } else {
        flashDisplay('red');
    }
    code = ""
    displayDiv.innerText = code;

}

function flashDisplay(color) {
    displayDiv.classList.add(color);
    setTimeout(() => {
        displayDiv.classList.remove(color);
    }, 1000);
}

function toggleDoor() {
    door.classList.toggle("doorOpen");
}

