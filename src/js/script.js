import IMask from 'imask';
import Swiper from 'swiper/bundle';
import Accordion from 'accordion-js';


const swiperPopu = new Swiper(".popular", {
  spaceBetween: 18,

  breakpoints: {

    700: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    1190: {
      slidesPerView: 3,
      spaceBetween: 18,
    },

    1620: {
      slidesPerView: 4,
      spaceBetween: 18,
    },

  },

  scrollbar: {
    el: ".scrollbar-popular",
    draggable: true,
    dragSize: 142,
  },
});

const swiperBaner = new Swiper(".baner-slider", {
  slidesPerView: 1,
  spaceBetween: 200,
  pagination: {
    el: ".pagination-baner",
  },
});


const counter = document.querySelectorAll('[data-coun]');
if (counter) {
  counter.forEach(counter => {
    counter.addEventListener('click', e => {
      const target = e.target;
      if (target.closest('.counter__button')) {
        let value = parseInt(target.closest('.counter').querySelector('input').value);
        if (target.classList.contains('counter__butPlus')) {
          value++;
        } else {
          --value;
        }
        if (value <= 0) {
          value = 0;
        }
        target.closest('.counter').querySelector('input').value = value;
      }
    })
  })
}

//----

let btnPass = document.querySelector('.input__glassIcon');
let inPass = document.querySelector('.input__line-password');
const checkbox = document.querySelector('.ui-checkbox')

btnPass.onclick = function() {
  if (inPass.getAttribute('type') === 'password') {
    inPass.setAttribute('type', 'text');
    btnPass.classList.add('input__glassIcon--act');
  } else {
    inPass.setAttribute('type', 'password');
    btnPass.classList.remove('input__glassIcon--act');
  }
};

inPass.addEventListener('input', function() {
  if (this.value.length > 0) {
    this.classList.remove('password--error')
    this.classList.add('password--success')
  } else {
    this.classList.remove('password--success')
    this.classList.add('password--error')
  }

})


//-----


let phoneMask = IMask(
  document.getElementById('phone-mask'), {
    mask: '+{7}(000)000-00-00'
  });


//-----

const buttons = document.querySelectorAll(".open-popup");
const popup = document.querySelector(".popup");
const buttonClose = popup.querySelector(".popup__close");
const popupBlock = popup.querySelector(".popup__block");

function openPopup() {
  popup.classList.add("popup--active");
}

function closePopup() {
  popup.classList.remove("popup--active");
}

buttons.forEach(function (item) {
  item.addEventListener("click", openPopup);
});

buttonClose.addEventListener("click", closePopup);

popup.addEventListener("click", closePopup);

popupBlock.addEventListener("click", (event) => {
  event.stopPropagation();
});

//----

let accordion = new Accordion('.accordion__container');

