let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});


const sr = ScrollReveal({
  distance: '30px',
  duration: 2000,
  reset: false,
  })
  sr.reveal('.symtoms .content',{origin: 'left',delay: 200})
  sr.reveal('.symtoms .image',{origin:'right',delay: 200})
  sr.reveal('.card-3',{origin: 'left',delay: 200})
  sr.reveal('.card-2',{origin:'right',delay: 200})
  sr.reveal('.footer',{origin: 'right',delay: 200})
  sr.reveal('.footer .box-container',{origin: 'left',delay: 400})
  sr.reveal('.footer h1',{origin: 'bottom',delay: 200})
  sr.reveal('.services .heading',{origin: 'bottom',delay: 100})
  sr.reveal('.contact .row .image',{origin: 'left',delay: 200})
  sr.reveal('.popular .box-container',{origin: 'top',delay: 200})
  sr.reveal('.services .box-container',{origin: 'bottom',delay: 200})
  sr.reveal('.protect .box-container',{origin: 'bottom',delay: 200})
  sr.reveal('.protect .heading',{origin: 'bottom',delay: 200})
  sr.reveal('.gallery .heading',{origin: 'bottom',delay: 100})
  sr.reveal('.gallery .box-container',{origin: 'bottom',delay: 200})
  sr.reveal('.prevent .row .image',{origin: 'left',delay: 200})
  sr.reveal('.prevent .row .content',{origin: 'bottom',delay: 200})
