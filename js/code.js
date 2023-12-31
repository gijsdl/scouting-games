const door = document.querySelector(".door");
const numbersDivs = document.querySelectorAll(".number");
const displayDiv = document.querySelector(".display");
let code = "";
const passcode = "5288";
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
        const audio = new Audio('audio/wrong.mp3');
        audio.volume = 0.5
        audio.play();
    }
    code = ""
    displayDiv.innerText = code;

}

function flashDisplay(color) {
    displayDiv.classList.add(color);
    setTimeout(() => {
        displayDiv.classList.remove(color);
    }, 1500);
}

function toggleDoor() {
    door.classList.toggle("doorOpen");
    new Audio('audio/door.mp3').play();
}

