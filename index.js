"use strict";

const menuButton = document.querySelector(".menu__button-container");
const burger = document.querySelector(".menu__button");
const blockMenu = document.querySelector(".menu");
const switchBtns = document.querySelectorAll(".requirements__switch-btn");
const requirementsStandart = document.getElementById(`requirements__standart`);
const requirementsLimited = document.getElementById(`requirements__limited`);
const requirementsRecommended = document.getElementById(
  `requirements__recommended`
);
const requirementsMinimum = document.getElementById(`requirements__minimum`);

//кнопка меню
menuButton.addEventListener("click", function () {
  burger.classList.toggle("is-active");
  blockMenu.classList.toggle("menu__hiden");
});

//переключатели чекбоксов
switchBtns.forEach((switchBtn) => {
  switchBtn.addEventListener("click", function (event) {
    if (document.getElementById("switch-btn1") === event.target) {
      switchBtn.classList.toggle("switch-on");
      requirementsStandart.classList.toggle("requirements-isActive");
      requirementsLimited.classList.toggle("requirements-isActive");
    } else if (document.getElementById("switch-btn0") === event.target) {
      switchBtn.classList.toggle("switch-on");
      requirementsMinimum.classList.toggle("requirements-isActive");
      requirementsRecommended.classList.toggle("requirements-isActive");
    }
  });
});
