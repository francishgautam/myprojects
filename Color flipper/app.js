const colors = [
  "green",
  "red",
  "blue",
  "green",
  "yellow",
  "gray",
  "black",
  "purple",
  "white",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let randomNumber = random();
  document.body.style.backgroundColor = colors[randomNumber];
  color.innerText = colors[randomNumber];
});
function random() {
  return Math.floor(Math.random() * colors.length);
}
