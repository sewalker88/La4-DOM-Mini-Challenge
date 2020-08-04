"use strict";
//-------------------------#1-------------------------------------
let currentTotal = 0;
let snacks = document.querySelectorAll(".snacks");
let total = document.querySelector(".total");
console.dir(snacks);

snacks.forEach((snack) => {
  snack.addEventListner("click", () => {
    let amount = parseInt(snack.getAttribute("data-amount"));
    currentTotal += amount;
    total.innerText = `TOTAL:$${currentTotal}`;
  });
});

// //-------------------------#2-----------------------------------------

let makeMoneyButton = document.querySelector(".Make Money");
makeMoneyButton.innerText = makeMoney;
let coinsButton = document.querySelector(".coins");
coinsButton.innerText = coins;
//-------------------#3----------------------
let bulb = document.querySelector("bulb");
let onButton = document.querySelector("on");
let offButton = document.querySelector("off");

onButton.addEventListener("click", () => {
  bulb.classList.add("light");
});
offButton.addEventListener("click", () => {
  bulb.classList.add("light");
});

toggleButton.addEventListener("click", () => {
  bulb.classList.toggle("light");
});
endButton.addEventListener("click", () => {
  bulb.remove("light");
  let buttons = document.querySelectorAll("bulb");
  buttons.forEach((button) => {
    button.disabled = true;
  });
});
