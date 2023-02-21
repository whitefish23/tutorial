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