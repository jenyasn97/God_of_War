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

const editions = [
  {
    id: 0,
    img: `./img/card/img.png`,
    title: `Standart Edition`,
    platform: `PS5`,
    description1: `Offline play enabled`,
    description2: `Remote Play supported`,
    description3: `Trigger effect required`,
    price: `19.99$`,
  },
  {
    id: 1,
    img: `./img/card/img.png`,
    title: `Standart Edition`,
    platform: `PS4`,
    description1: `Offline play enabled`,
    description2: `Remote Play supported`,
    description3: `Trigger effect required`,
    price: `18.99$`,
  },
  {
    id: 2,
    img: `./img/card/img2.png`,
    title: `Digital Deluxe Edition`,
    platform: `PS5`,
    description1: `Offline play enabled`,
    description2: `Remote Play supported`,
    description3: `Trigger effect required`,
    price: `29.99$`,
  },
];

const systemPC = [
  {
    img: "./img/requirements/image1.png",
    minimum: {
      cpu: "Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)",
      ram: "8 GB",
      os: "Windows 10 64-bit",
      videocard: "NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)",
      "pixel shader": "5.1",
      "vertex shader": "5.1",
      "free disk space": "70 GB",
      "dedicated video ram": "4 GB",
    },
    recomended: {
      cpu: "Intel i5-12600k (10 core 3.7 GHz) or AMD Ryzen  7800 (8 core 4.2 GHz)",
      ram: "16 GB",
      os: "Windows 10 64-bit",
      videocard: "NVIDIA RTX 2070  (8 GB) or AMD RX 7000 (8 GB)",
      "pixel shader": "5.1",
      "vertex shader": "5.1",
      "free disk space": "120 GB",
      "dedicated video ram": "8 GB",
    },
  },
];
const systemPS = [
  {
    img: "./img/requirements/image2.png",
    standart: {
      price: "15.99$",
      platform: "PS4",
      premiere: "20.4.2018",
      publisher: "Sony Interactive Entertainment Europe",
      species: "Action, Adventure",
      voice: "English, Polish, Russian",
      "display languages": "English, Dutch, Polish, Russian, Turkish",
    },
    limited: {
      price: "25.99$",
      platform: "PS5",
      premiere: "20.6.2022",
      publisher: "Sony Interactive Entertainment Europe",
      species: "Action, Adventure",
      voice: "English, Polish, Russian, Turkish",
      "display languages": "English, Dutch, Polish, Russian, Turkish",
    },
  },
];

const news = [
  {
    id: 0,
    theme: "God of War Ragnarok",
    date: "19/10/2022",
    title: "will receive a large update on release",
    img: "./img/cardNews/img1.png",
    description: `God of War: Ragnarok is fast approaching. No wonder that we have been regularly receiving new information and materials
    related to the title in recent times. Last week, a trailer presenting the possibilities of the game on PlayStation 5 hit the
    network , and a little earlier we learned that the work on the production was completed . Meanwhile, it turns out that the
    upcoming sequel to the adventures of Kratos and Atreus will receive a major update on release.`,
  },
  {
    id: 1,
    theme: "God of War Ragnarok",
    date: "19/10/2022",
    title: "will receive a large update on release",
    img: "./img/cardNews/img1.png",
    description: `God of War: Ragnarok is fast approaching. No wonder that we have been regularly receiving new information and materials
    related to the title in recent times. Last week, a trailer presenting the possibilities of the game on PlayStation 5 hit the
    network , and a little earlier we learned that the work on the production was completed . Meanwhile, it turns out that the
    upcoming sequel to the adventures of Kratos and Atreus will receive a major update on release.`,
  },
  {
    id: 2,
    theme: "God of War Ragnarok",
    date: "19/10/2022",
    title: "will receive a large update on release",
    img: "./img/cardNews/img1.png",
    description: `God of War: Ragnarok is fast approaching. No wonder that we have been regularly receiving new information and materials
    related to the title in recent times. Last week, a trailer presenting the possibilities of the game on PlayStation 5 hit the
    network , and a little earlier we learned that the work on the production was completed . Meanwhile, it turns out that the
    upcoming sequel to the adventures of Kratos and Atreus will receive a major update on release.`,
  },
  {
    id: 3,
    theme: "God of War Ragnarok",
    date: "19/10/2022",
    title: "will receive a large update on release",
    img: "./img/cardNews/img1.png",
    description: `God of War: Ragnarok is fast approaching. No wonder that we have been regularly receiving new information and materials
    related to the title in recent times. Last week, a trailer presenting the possibilities of the game on PlayStation 5 hit the
    network , and a little earlier we learned that the work on the production was completed . Meanwhile, it turns out that the
    upcoming sequel to the adventures of Kratos and Atreus will receive a major update on release.`,
  },
  {
    id: 4,
    theme: "God of War Ragnarok",
    date: "19/10/2022",
    title: "will receive a large update on release",
    img: "./img/cardNews/img1.png",
    description: `God of War: Ragnarok is fast approaching. No wonder that we have been regularly receiving new information and materials
    related to the title in recent times. Last week, a trailer presenting the possibilities of the game on PlayStation 5 hit the
    network , and a little earlier we learned that the work on the production was completed . Meanwhile, it turns out that the
    upcoming sequel to the adventures of Kratos and Atreus will receive a major update on release.`,
  },
  {
    id: 5,
    theme: "God of War Ragnarok",
    date: "19/10/2022",
    title: "will receive a large update on release",
    img: "./img/cardNews/img1.png",
    description: `God of War: Ragnarok is fast approaching. No wonder that we have been regularly receiving new information and materials
    related to the title in recent times. Last week, a trailer presenting the possibilities of the game on PlayStation 5 hit the
    network , and a little earlier we learned that the work on the production was completed . Meanwhile, it turns out that the
    upcoming sequel to the adventures of Kratos and Atreus will receive a major update on release.`,
  },
  {
    id: 6,
    theme: "God of War Ragnarok",
    date: "19/10/2022",
    title: "will receive a large update on release",
    img: "./img/cardNews/img1.png",
    description: `God of War: Ragnarok is fast approaching. No wonder that we have been regularly receiving new information and materials
    related to the title in recent times. Last week, a trailer presenting the possibilities of the game on PlayStation 5 hit the
    network , and a little earlier we learned that the work on the production was completed . Meanwhile, it turns out that the
    upcoming sequel to the adventures of Kratos and Atreus will receive a major update on release.`,
  },
];

let checkPC = false;
let checkPS = false;

editions.forEach((edition) => {
  document.querySelector(".editions__container").innerHTML += `<div class="editions__item">
  <img src="${edition.img}" alt="${edition.title}" class="editions__img" />
  <div class="editions__title-text">
    <span class="editions__card-title">${edition.title}</span>
    <span class="editions__subtitle">${edition.platform}</span>
  </div>
  <div class="editions__description-text">
    <span class="editions__description-one">${edition.description1}</span>
    <span class="editions__description-two">${edition.description2}</span>
    <span class="editions__description-three">${edition.description3}</span>
  </div>
  <div class="editions__pay">
    <span class="editions__price">${edition.price}</span>
    <button type="button" class="btn btn-violet editions__btn">BUY NOW</button>
  </div>
</div>`;
});

news.forEach((newItem) => {
  document.querySelector(".swiper-wrapper").innerHTML += `
              <div class="swiper-slide news__swiper-slide news__cardnews">
                <div class="cardnews__container news__cardnews-container">
                  <div class="cardnews__head news__cardnews-head">
                    <span class="cardnews__name news__cardnews-name">${newItem.theme}</span>
                    <span class="cardnews__date news__cardnews-date">${newItem.date}</span>
                  </div>
                  <h3 class="cardnews__title news__cardnews-title">${newItem.title}</h3>
                  <div class="cardnews__body news__cardnews-body">
                    <div class="cardnews__imeg-container news__cardnews-imeg-container">
                      <img src="${newItem.img}" alt="${newItem.title}" />
                    </div>
                    <div class="cardnews__content news__cardnews-content">
                      <span class="cardnews__content-text news__cardnews-content-text"
                        >${newItem.description}</span
                      >
                      <button class="btn cardnews__content-btn news__cardnews-content-btn">read</button>
                    </div>
                  </div>
                </div>
              </div>
              

  `;
});

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
    blockMenu.classList.add("menu__hiden");
    burger.classList.remove("is-active");
  });
});

//переключатели чекбоксов
switchBtns.forEach((switchBtn) => {
  switchBtn.addEventListener("click", function (event) {
    if (document.getElementById("switch-btn1") === event.target) {
      switchBtn.classList.toggle("switch-on");
      requirementsStandart.classList.toggle("requirements-isActive");
      requirementsLimited.classList.toggle("requirements-isActive");
      checkPS = !checkPS;
      setSetiingsPS(checkPS);
    } else if (document.getElementById("switch-btn0") === event.target) {
      switchBtn.classList.toggle("switch-on");
      requirementsMinimum.classList.toggle("requirements-isActive");
      requirementsRecommended.classList.toggle("requirements-isActive");
      checkPC = !checkPC;
      setSetiingsPC(checkPC);
    }
  });
});

setSetiingsPC();
setSetiingsPS();

function setSetiingsPC(check = false) {
  let settings = ``;
  systemPC.forEach((system) => {
    check = check ? "recomended" : "minimum";
    settings = `<div class="requirements__specification">
    <div class="requirements__specification-left">
      <div class="requirements__specification-background">
        <img src="${system.img}" alt="image1" class="requirements__specification-img" />
      </div>
    </div>
    <div class="requirements__specification-right">
      <h4 class="requirements__specification">CPU<span>: ${system[check].cpu}</span></h4>
      <h4 class="requirements__specification">RAM<span>: ${system[check].ram}</span></h4>
      <h4 class="requirements__specification">OS<span>: ${system[check].os} </span></h4>
      <h4 class="requirements__specification">VIDEOCARD<span>: ${system[check].videocard} </span></h4>
      <h4 class="requirements__specification">PIXEL SHADER<span>: ${system[check][`pixel shader`]}</span></h4>
      <h4 class="requirements__specification">VERTEX SHADER<span>: ${system[check][`vertex shader`]}</span></h4>
      <h4 class="requirements__specification">FREE DISK SPACE<span>: ${system[check][`free disk space`]}</span></h4>
      <h4 class="requirements__specification">DEDICATED VIDEO RAM<span>: ${system[check][`dedicated video ram`]}</span></h4>
      <button type="button" class="btn btn-red btn-requirements">buy NOW</button>
    </div>
  </div>`;
  });

  return (document.querySelector(".requirements_system-pc").innerHTML = settings);
}
function setSetiingsPS(check = false) {
  let settings = ``;
  systemPS.forEach((system) => {
    check = check ? "limited" : "standart";
    settings = `<div class="requirements__price">${system[check].price}</div>
    <div class="requirements__specification">
      <div class="requirements__specification-right">
        <h4 class="requirements__specification">Platform<span>: ${system[check].platform}</span></h4>
        <h4 class="requirements__specification">Premiere<span>: ${system[check].premiere}</span></h4>
        <h4 class="requirements__specification">Publisher<span>: ${system[check].publisher}</span></h4>
        <h4 class="requirements__specification">Species<span>: ${system[check].species}</span></h4>
        <h4 class="requirements__specification">Voice<span>: ${system[check].voice} </span></h4>
        <h4 class="requirements__specification">Display languages<span>: ${system[check]["display languages"]}</span></h4>

        <button type="button" class="btn btn-red btn-requirements">buy NOW</button>
      </div>
      <div class="requirements__specification-left">
        <div class="requirements__specification-background">
          <img src="${system.img}" alt="image2" class="requirements__specification-img" />
        </div>
      </div>
    </div>`;
  });

  return (document.querySelector(".requirements_system-ps").innerHTML = settings);
}
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
