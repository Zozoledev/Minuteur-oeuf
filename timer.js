let timerElement = document.getElementById("timer");
let temp = 0;
let intervalId;

function diminuerTemps() {
    let minute = Math.floor(temp / 60);
    let seconde  = temp % 60;
    timerElement.innerText = minute + " : " + seconde;
    temp -= 1;

    if (temp < 0) {
        clearInterval(intervalId);
        timerElement.innerText = "Terminé !";
    }
}

function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(diminuerTemps, 1000);
}

// Écoute le message avec la valeur du timer
window.api.onTimerValue((value) => {
    temp = value;
    startTimer();
});

document.getElementById("back").addEventListener("click", () => {
    window.api.openMenu()
});