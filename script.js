// LED Fade In / Fade Out
const led = document.getElementById("led");

let brilho = 0;
let aumentando = true;

setInterval(() => {
    if (aumentando) {
        brilho += 0.02;
        if (brilho >= 1) aumentando = false;
    } else {
        brilho -= 0.02;
        if (brilho <= 0) aumentando = true;
    }

    led.style.opacity = brilho;
    led.style.boxShadow = `0 0 ${10 + brilho * 30}px red`;
}, 30);

// LED RGB
const rgb = document.getElementById("rgb");

const cores = [
    "red",
    "yellow",
    "green",
    "cyan",
    "blue",
    "magenta",
    "white"
];

let indice = 0;

setInterval(() => {
    rgb.style.backgroundColor = cores[indice];
    rgb.style.boxShadow = `0 0 25px ${cores[indice]}`;

    indice++;
    if (indice >= cores.length) {
        indice = 0;
    }
}, 1000);