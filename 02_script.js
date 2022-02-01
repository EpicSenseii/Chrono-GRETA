var chrono = document.querySelector(".chrono");
var btnStart = document.querySelector(".btnStart");
var btnStop = document.querySelector(".btnStop");
var btnReset = document.querySelector(".btnReset");

btnStart.addEventListener("click", chronoStart);
btnStop.addEventListener("click", chronoStop);
btnReset.addEventListener("click", chronoReset);

var initialSeconds = 0;
var clearInterval1;

function chronoStart() {
    clearInterval1 = setInterval(() => {
        initialSeconds++;
        chrono.innerHTML = initialSeconds;
    }, 1000);
    btnStart.style.pointerEvents = "none";
}

function chronoStop() {
    clearInterval(clearInterval1);
    btnStart.style.pointerEvents = "all";
}

function chronoReset() {
    clearInterval(clearInterval1);
    btnStart.style.pointerEvents = "all";
    initialSeconds = 0;
    chrono.innerHTML = 0;
}