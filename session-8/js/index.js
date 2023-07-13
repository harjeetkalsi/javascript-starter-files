import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";


const button = document.createElement("button");

const content = document.createTextNode(
    "Show Population"
  );

button.appendChild(content);


// button.onclick = displayPopulation;

button.addEventListener("click", displayPopulation);

document.body.appendChild(button);

createListOfFruits(fruits);

// const x = document.querySelector("#clickMe");
// const y = document.querySelector("#hovering");

// x.addEventListener("click", respondClick);
// y.addEventListener("mouseover", respondMouseOver);
// y.addEventListener("mouseout", respondMouseOut);

// function respondMouseOver() {
//   document.querySelector("#effect").innerHTML += "MouseOver Event" + "<br>";
// }

// function respondMouseOut() {
//   document.querySelector("#effect").innerHTML += "MouseOut Event" + "<br>";
// }

// function respondClick() {
//   document.querySelector("#effect").innerHTML += "Click Event" + "<br>";
// }

document
  .querySelector("#remove-handler")
  .addEventListener("mousemove", randomNumber);

const remove_button = document.querySelector('#remove-handler-button')  
remove_button.addEventListener("click", removeHandler);

function randomNumber() {
  document.querySelector("#random-number").innerHTML = Math.random();
}

function removeHandler() {
    document.querySelector("#remove-handler").removeEventListener("mousemove", randomNumber);
  }
  
