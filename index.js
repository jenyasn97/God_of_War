"use strict";

const menuButton = document.querySelector(".menu__button-container");
const burger = document.querySelector(".menu__button");
const blockMenu = document.querySelector(".menu");
const switchBtn = document.querySelectorAll(".requirements__switch-btn");
const requirementsPreference = document.querySelectorAll(
  ".requirements_preference"
);
menuButton.addEventListener("click", function () {
  burger.classList.toggle("is-active");
  blockMenu.classList.toggle("menu__hiden");
});

switchBtn.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("switch-on");
    requirementsPreference.forEach((item) => {
      item.classList.toggle("requirements-isActive");
    });
  });
});
