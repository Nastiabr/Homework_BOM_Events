const makeBlueBtn = document.querySelector("#makeBlue");
const makePinkBtn = document.querySelector("#makePink");
const makeBrownBtn = document.querySelector("#makeBrown");
const makeYellowBtn = document.querySelector("#makeYellow");
const body = document.querySelector("body");

makeBlueBtn.addEventListener("click", makeBlue);
makePinkBtn.addEventListener("dblclick", makePink);
makeBrownBtn.addEventListener("mousedown", makeBrown);
makeBrownBtn.addEventListener("mouseup", makeWhite);
makeYellowBtn.addEventListener("mouseover", makeYellow);
makeYellowBtn.addEventListener("mouseout", makeWhite);

function makeBlue() {
  body.style.backgroundColor = "blue";
}

function makePink() {
  body.style.backgroundColor = "pink";
}

function makeBrown() {
  body.style.backgroundColor = "brown";
}

function makeWhite() {
  body.style.backgroundColor = "white";
}

function makeYellow() {
  body.style.backgroundColor = "yellow";

}
