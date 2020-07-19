//    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   
   // Кнопка наверх:
   $(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() != 0)
          $("#toTop").fadeIn();
      else
          $("#toTop").fadeOut();
  });
  
      $("#toTop").click(function() {
          $('body, html').animate({
              scrollTop:0
          }, 700);
      });
    });


  // Burger menu:

  let burgerMenu = document.querySelector('.burger__menu');
  let leftMenu = document.querySelector('.menu__left');
  let closeMenu = document.querySelector('.close__menu__btn');

  burgerMenu.onclick = function() {
    leftMenu.classList.add('open__menu');
    leftMenu.classList.remove('close__menu');
    burgerMenu.style.visibility = 'hidden';
  }

  closeMenu.onclick = function() {
    leftMenu.classList.add('close__menu');
    leftMenu.classList.remove('open__menu');
    burgerMenu.style.visibility = 'visible';
  }

//    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

$(document).ready(function() {
  $(document).on('click', '.btn', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
});

let start = document.querySelectorAll('.start');
let standart = document.querySelectorAll('.standart');
let vip = document.querySelectorAll('.vip');

let startTxt = document.querySelectorAll('.start__txt');
let standartTxt = document.querySelectorAll('.standart__txt');
let vipTxt = document.querySelectorAll('.vip__txt');

let landingTitle = document.querySelectorAll('.landing-title');
let landingTxt = document.querySelectorAll('.landing-txt');
let landingTitle2 = document.querySelectorAll('.landing-title2');
let landingTxt2 = document.querySelectorAll('.landing-txt2');
let block = document.querySelectorAll('.price__block');
let deleteClass = document.querySelector('.header__title');
let deleteClassBtn = document.querySelector('.get__tz__btn');

// price:
for(let i = 0; i < start.length; i ++) {
  start[i].style.display = "none";
  start[0].style.display = "block";
}
for(let i = 0; i < standart.length; i ++) {
  standart[i].style.display = "none";
  standart[0].style.display = "block";
}
for(let i = 0; i < vip.length; i ++) {
  vip[i].style.display = "none";
  vip[0].style.display = "block";
}
// text:
for(let i = 0; i < startTxt.length; i ++) {
  startTxt[i].style.display = "none";
  startTxt[0].style.display = "block";
}
for(let i = 0; i < standartTxt.length; i ++) {
  standartTxt[i].style.display = "none";
  standartTxt[0].style.display = "block";
}
for(let i = 0; i < vipTxt.length; i ++) {
  vipTxt[i].style.display = "none";
  vipTxt[0].style.display = "block";
}

//  quations:
for(let i = 0; i < landingTitle.length; i ++) {
  landingTitle[i].style.display = "none";
  landingTitle[0].style.display = "block";
}
for(let i = 0; i < landingTxt.length; i ++) {
  landingTxt[i].style.display = "none";
  landingTxt[0].style.display = "block";
}
for(let i = 0; i < landingTitle2.length; i ++) {
  landingTitle2[i].style.display = "none";
  landingTitle2[0].style.display = "block";
}
for(let i = 0; i < landingTxt2.length; i ++) {
  landingTxt2[i].style.display = "none";
  landingTxt2[0].style.display = "block";
}

    // Landing page:
  function showLanding() {
    deleteClass.classList.remove('wow', 'fadeInLeft');
      deleteClassBtn.classList.remove('wow', 'fadeInLeft');
      for(let i = 0; i < start.length; i ++) {
        start[i].style.display = "none";
        start[0].style.display = "block";
        standart[i].style.display = "none";
        standart[0].style.display = "block";
        vip[i].style.display = "none";
        vip[0].style.display = "block";
        startTxt[i].style.display = "none";
        startTxt[0].style.display = "block";
        standartTxt[i].style.display = "none";
        standartTxt[0].style.display = "block";
        vipTxt[i].style.display = "none";
        vipTxt[0].style.display = "block";
        landingTitle[i].style.display = "none";
        landingTitle[0].style.display = "block";
        landingTxt[i].style.display = "none";
        landingTxt[0].style.display = "block";
        landingTitle2[i].style.display = "none";
        landingTitle2[0].style.display = "block";
        landingTxt2[i].style.display = "none";
        landingTxt2[0].style.display = "block";
      }
      for(let r = 0; r < block.length; r ++) {}
          block[0].classList.add("wow", "fadeIn");
          block[1].classList.add("wow", "fadeIn");
          block[2].classList.add("wow", "fadeIn");
      new WOW().init();
  }
    // Сайт-визитка:
  function showVizitka() {
    deleteClass.classList.remove('wow', 'fadeInLeft');
      deleteClassBtn.classList.remove('wow', 'fadeInLeft');
      for(let i = 0; i < standart.length; i ++) {    
        start[i].style.display = "none";
        start[1].style.display = "block";
        standart[i].style.display = "none";
        standart[1].style.display = "block";
        vip[i].style.display = "none";
        vip[1].style.display = "block";
        startTxt[i].style.display = "none";
        startTxt[1].style.display = "block";
        standartTxt[i].style.display = "none";
        standartTxt[1].style.display = "block";
        vipTxt[i].style.display = "none";
        vipTxt[1].style.display = "block";
        landingTitle[i].style.display = "none";
        landingTitle[1].style.display = "block";
        landingTxt[i].style.display = "none";
        landingTxt[1].style.display = "block";
        landingTitle2[i].style.display = "none";
        landingTitle2[1].style.display = "block";
        landingTxt2[i].style.display = "none";
        landingTxt2[1].style.display = "block";
      }
      for(let r = 0; r < block.length; r ++) {}
          block[0].classList.add("wow", "fadeIn");
          block[1].classList.add("wow", "fadeIn");
          block[2].classList.add("wow", "fadeIn");
      new WOW().init();
  }

    // Корпоративный сайт:
  function showCorporative() {
    deleteClass.classList.remove('wow', 'fadeInLeft');
      deleteClassBtn.classList.remove('wow', 'fadeInLeft');
      for(let i = 0; i < standart.length; i ++) {   
        start[i].style.display = "none";
        start[2].style.display = "block";
        standart[i].style.display = "none";
        standart[2].style.display = "block";
        vip[i].style.display = "none";
        vip[2].style.display = "block";
        startTxt[i].style.display = "none";
        startTxt[2].style.display = "block";
        standartTxt[i].style.display = "none";
        standartTxt[2].style.display = "block";
        vipTxt[i].style.display = "none";
        vipTxt[2].style.display = "block";
        landingTitle[i].style.display = "none";
        landingTitle[2].style.display = "block";
        landingTxt[i].style.display = "none";
        landingTxt[2].style.display = "block";
        landingTitle2[i].style.display = "none";
        landingTitle2[2].style.display = "block";
        landingTxt2[i].style.display = "none";
        landingTxt2[2].style.display = "block";
      }
      for(let r = 0; r < block.length; r ++) {}
          block[0].classList.add("wow", "fadeIn");
          block[1].classList.add("wow", "fadeIn");
          block[2].classList.add("wow", "fadeIn");
      new WOW().init();
  }

  // Интернет магазин:
  function showStore() {
    deleteClass.classList.remove('wow', 'fadeInLeft');
      deleteClassBtn.classList.remove('wow', 'fadeInLeft');
      for(let i = 0; i < standart.length; i ++) {
        standart[i].style.display = "none";
        standart[0].style.display = "block";    
        start[i].style.display = "none";
        start[3].style.display = "block";
        standart[i].style.display = "none";
        standart[3].style.display = "block";
        vip[i].style.display = "none";
        vip[3].style.display = "block";
        startTxt[i].style.display = "none";
        startTxt[3].style.display = "block";
        standartTxt[i].style.display = "none";
        standartTxt[3].style.display = "block";
        vipTxt[i].style.display = "none";
        vipTxt[3].style.display = "block";
        landingTitle[i].style.display = "none";
        landingTitle[3].style.display = "block";
        landingTxt[i].style.display = "none";
        landingTxt[3].style.display = "block";
        landingTitle2[i].style.display = "none";
        landingTitle2[3].style.display = "block";
        landingTxt2[i].style.display = "none";
        landingTxt2[3].style.display = "block";
      } 
      for(let r = 0; r < block.length; r ++) {}
          block[0].classList.add("wow", "fadeIn");
          block[1].classList.add("wow", "fadeIn");
          block[2].classList.add("wow", "fadeIn");
      new WOW().init();
  }

  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: 'auto',
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
