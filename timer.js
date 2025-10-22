let timerElement = document.getElementById("timer");
let temp = 0;

function diminuerTemps(){

    timerElement.innerText = temp
    temp -= 1;

}

setInterval(diminuerTemps, 1000);

document.getElementById("coq").addEventListener("click", () => {
    window.api.openMinuteur();
    temp = 90;

});

document.getElementById("dure").addEventListener("click", () => {
    window.api.openMinuteur();
    temp = 540;
});

document.getElementById("mollets").addEventListener("click", () => {
    window.api.openMinuteur();
    temp = 360;

});