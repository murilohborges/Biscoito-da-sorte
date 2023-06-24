const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnCookie = document.querySelector(".closedCookie");
const btnReset = document.querySelector(".btnReset");

// Evento (Trocar de telas)

btnCookie.addEventListener('click', toggleScreen);
btnReset.addEventListener('click', toggleScreen);

// funções
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}