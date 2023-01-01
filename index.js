const body = document.getElementsByTagName("body")[0];
const slider = document.getElementById('slider');
let button = [];
let countIndex = 0;
let deleteIndex = 0;

let maxHeight = window.innerHeight - 125;
let maxWidth = window.innerWidth - 125;

let clocks = ["🕛", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚"];
let newButton = [];

for (let i = 0; i < slider.value; i++) {
    generateButton();
}
buttonColor();

button = document.getElementsByClassName('button');

function generateButton() {
    let randomHeight = Math.trunc(Math.floor(Math.random() * maxHeight));
    let randomWidth = Math.trunc(Math.floor(Math.random() * maxWidth));
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    newButton.push(document.createElement("button")); //create new button

    newButton[countIndex].classList.add("button"); //add class to button
    newButton[countIndex].style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
    let randomClock = Math.floor(Math.random() * clocks.length);
    newButton[countIndex].innerText = clocks[randomClock];
    newButton[countIndex].style.top = randomHeight + "px"; //add random height
    newButton[countIndex].style.left = randomWidth + "px"; //add random width


    document.body.appendChild(newButton[countIndex]);
    countIndex++;
}

function deleteButton() {
    let elements = document.getElementsByClassName("button");
    elements[deleteIndex].parentNode.removeChild(elements[deleteIndex]);
    deleteIndex++;
}



function buttonColor() {
    button = document.getElementsByClassName('button');
    for (let k of newButton) {
        k.addEventListener("mouseenter", function(event) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
        });

        k.addEventListener("click", function onClick(event) {
            let randomHeight = Math.trunc(Math.floor(Math.random() * maxHeight));
            let randomWidth = Math.trunc(Math.floor(Math.random() * maxWidth));
            k.style.top = randomHeight + "px";
            k.style.left = randomWidth + "px";
        })
    }
}


slider.addEventListener('input', (event) => {
    if (slider.value > newButton.length) {
        countIndex = 0;
        for (let increase = 0; increase < (slider.value - newButton.length + button.length / 2); increase++) {
            generateButton();
        }
        buttonColor();

    } else if (slider.value < newButton.length) {
        let decrease = newButton.length - slider.value;
        deleteIndex = 0;
        for (decrease < button.length - slider.value; decrease--;) {
            // deleteButton(); 
        }
    } else {

    }


});