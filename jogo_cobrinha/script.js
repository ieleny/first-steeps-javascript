let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for (i = 0; i < snake.lenght; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    criarBG();
    criarCobrinha();
}


let jogo = setInterval(iniciarJogo, 100);