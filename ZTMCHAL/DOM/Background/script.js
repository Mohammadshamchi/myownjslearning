var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function gradientColor() {
  //  body.style.background = :=> this is the syntax not
  // "linear-gradient(to right," + color1.value + "," + color2.value + ")";
  //   css.textContent = body.style.background + ";";
  // This part
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}
color1.addEventListener("input", gradientColor);

color2.addEventListener("input", gradientColor);
