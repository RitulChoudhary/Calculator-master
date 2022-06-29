//console.log("a dn a");
const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');
var numberOfDrumButtons = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        calculate(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function(event) {

    calculate(event.key);
    buttonAnimation(event.key);

});



function calculate(key) {

    const clickedButtonValue = key;

    if (clickedButtonValue === '=') {

        if (display.value !== "") {

            display.value = eval(display.value);

        }

    } else if (clickedButtonValue === 'AC') {

        display.value = "";

    } else if (clickedButtonValue == 'C') {

        var back;

        back = display.value;

        display.value = back.substring(0, back.length - 1);

    } else {
        display.value += clickedButtonValue;

    }


}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}