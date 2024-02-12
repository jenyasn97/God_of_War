"use strict";
// import function to register Swiper custom elements

const menuButton = document.querySelector(".menu__btn-container");
const burger = document.querySelector(".menu__button");
const blockMenu = document.querySelector(".menu");
const switchBtns = document.querySelectorAll(".requirements__switch-btn");
const requirementsStandart = document.getElementById(`requirements__standart`);
const requirementsLimited = document.getElementById(`requirements__limited`);
const requirementsRecommended = document.getElementById(`requirements__recommended`);
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

/* свайпер слайдер  */
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
