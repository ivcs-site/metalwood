const openBtn = document.querySelector('.nav__open');
// const openBtnItem = document.querySelector('.nav__open-btn');
const body = document.querySelector('body');
const exitBtn = document.querySelector('.nav__exit');
const nav = document.querySelector('.nav');
const navFilter = document.querySelector('.nav-filter');

openBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    // openBtnItem.classList.toggle('active');
    body.classList.toggle('active');
    navFilter.classList.add('active');
})

exitBtn.addEventListener('click', () => {
    nav.classList.remove('active');
    // openBtnItem.classList.remove('active');
    body.classList.remove('active');
    navFilter.classList.remove('active');
})

navFilter.addEventListener('click', () => {
    nav.classList.remove('active');
    body.classList.remove('active');
    navFilter.classList.remove('active');
})

var firstSwiper = new Swiper(".mySwiperOne", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var secondSwiper = new Swiper(".mySwiperTwo", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var secondSwiper = new Swiper(".mySwiperThree", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },
    breakpoints: {
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});