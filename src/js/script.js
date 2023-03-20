import Swiper from 'swiper/bundle';

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

let btnPass = document.querySelector('.btn__pass');
let inPass = document.querySelector('.password');
const checkbox = document.querySelector('.ui-checkbox')

btnPass.onclick = function() {
  if (inPass.getAttribute('type') === 'password') {
    inPass.setAttribute('type', 'text');
    btnPass.classList.add('act');
  } else {
    inPass.setAttribute('type', 'password');
    btnPass.classList.remove('act');
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
