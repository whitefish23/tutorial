import Swiper from 'swiper/bundle';

const swiperBaner = new Swiper(".slider-baner", {
  pagination: {
    el: ".pagination-baner",
  },
});


const swiperPop = new Swiper(".slider-popular", {
  slidesPerView: 'auto',
  spaceBetween: 18,

  scrollbar: {
    el: ".scrollbar-popular",
    draggable: true,
    dragSize: 143,
  },
});

const tabsBtn = document.querySelectorAll(".navigation__tab")
const tabsitem = document.querySelectorAll(".slider-positions__slide")

function tabsControl(currentBtn) {
  const tabId = currentBtn.getAttribute("data-tab")
  let currentTab = document.querySelector(tabId)

  tabsBtn.forEach(function (item) {
    item.classList.remove("active")
  })

  tabsitem.forEach(function (item) {
    item.classList.remove("active")
  })

  currentBtn.classList.add("active")
  currentTab.classList.add("active")
}

tabsBtn.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabsControl(this)

    carretAnimate(this)
  })
})

const filterBtn = document.querySelectorAll(".button-transparent")

filterBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    filterBtn.forEach(el => { el.classList.remove('active'); })
    item.classList.add('active')
  })
})

const filterBtnIcon = document.querySelectorAll(".button-with-icon")

filterBtnIcon.forEach(item => {
  item.addEventListener('click', (e) => {
    filterBtnIcon.forEach(el => { el.classList.remove('active'); })
    item.classList.add('active')
  })
})

const btnStar = document.querySelectorAll(".button-star")

btnStar.forEach(item => {
  item.addEventListener('click', (e) => {
    item.classList.toggle('active');

  })
})

const btnlike = document.querySelectorAll(".icon-like")

btnlike.forEach(item => {
  item.addEventListener('click', (e) => {
    item.classList.toggle('active');

  })
})




const btnLike = document.querySelectorAll('.icon-like');

let like = true,
  likeCount = document.querySelector('.like-number').innerHTML;

btnLike.forEach(item => {
  item.addEventListener('click', () => {

    likeCount = like ? ++likeCount : --likeCount;
    like = !like;
    document.querySelector('.like-number').innerHTML = likeCount;
  });
})














