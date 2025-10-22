let timerElement = document.getElementById("timer");
let temp = 0;
let intervalId;

function diminuerTemps() {
    timerElement.innerText = temp;
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
