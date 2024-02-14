"use strict";

const menuButton = document.querySelector(".menu__btn-container");
const burger = document.querySelector(".menu__button");
const blockMenu = document.querySelector(".menu");
const switchBtns = document.querySelectorAll(".requirements__switch-btn");
const requirementsStandart = document.getElementById(`requirements__standart`);
const requirementsLimited = document.getElementById(`requirements__limited`);
const requirementsRecommended = document.getElementById(`requirements__recommended`);
const requirementsMinimum = document.getElementById(`requirements__minimum`);
const menuLinks = document.querySelectorAll(".menu__link ");
const accordionBtns = document.querySelectorAll(".faq__accordion-btn");
const accordionBodys = document.querySelectorAll(".faq__accordion-body");

//кнопка меню
menuButton.addEventListener("click", function () {
  burger.classList.toggle("is-active");
  blockMenu.classList.toggle("menu__hiden");
});

//подсветка активной ссылки
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menuLinks.forEach((link) => {
      link.classList.remove("menu__link-active");
    });
    menuLink.classList.add("menu__link-active");
  });
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

/* Плавный скрол */
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

/* свайпер слайдер  */
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Таймер обратного отсчета */
function timer(id, deadline) {
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());

    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(id, deadline);
}

timer(".clock", "2024-03-01");

accordionBtns.forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    if (!e.target.classList.contains("accordion-btn-active")) {
      e.target.classList.add("accordion-btn-active");
      accordionBodys[index].classList.add("faq__accordion-body-isactive");
    } else {
      e.target.classList.remove("accordion-btn-active");
      accordionBodys[index].classList.remove("faq__accordion-body-isactive");
    }
  });
});
