const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true, // Динамические буллеты
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const button = document.querySelector('.popup-btn');
const form = document.querySelector('#blablabla');
const popup = document.querySelector('.popup');
const closeForm = document.querySelector('.svg-form-vseznaika');
const closeFormBtn = document.querySelector('.closeFormBtnVseznaika');


button.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
});

closeForm.addEventListener('click', () => {
  form.classList.remove('open');
  popup.classList.remove('popup_open');
});


