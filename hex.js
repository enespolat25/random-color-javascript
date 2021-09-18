const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let hexColor = "#";
function dene() {
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
}
dene();

btn.addEventListener("click", function () {
  hexColor = "#";
  dene();
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
