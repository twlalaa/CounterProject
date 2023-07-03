"use strict";

let myBtns = document.querySelectorAll(".changeBtn");
let myInput = document.getElementById("input");

for (let i = 0; i < myBtns.length; i++) {
  myBtns[i].addEventListener("click", (e) => {
    if (e.target.classList.contains("minus")) {
      +myInput.value--;
    } else if (e.target.classList.contains("plus")) {
      +myInput.value++;
    }

    if (+myInput.value == 0) {
      myInput.style.color = "white";
    } else if (+myInput.value < 0) {
      myInput.style.color = "red";
    } else if (+myInput.value > 0) {
      myInput.style.color = "green";
    }
  });
}
