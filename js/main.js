let username = window.prompt("What is your name?");
let time;

document.getElementById("btn-yes").onclick = function () {
    document.getElementById("myh1").textContent = `I love you too ${username}😘`;
}