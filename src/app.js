/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = excuse();
  });
  console.log("Hello Rigo from the console!");
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let excuse = () => {
  let randomNumber1 = Math.floor(Math.random() * who.length);

  let randomNumber2 = Math.floor(Math.random() * action.length);

  let randomNumber3 = Math.floor(Math.random() * what.length);

  let randomNumber4 = Math.floor(Math.random() * when.length);
  return (
    who[randomNumber1] +
    " " +
    action[randomNumber2] +
    " " +
    what[randomNumber3] +
    " " +
    when[randomNumber4]
  );
};
