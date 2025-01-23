"use strict";
let swiper;
function initSwiper() {
  if (window.innerWidth < 540) {
    swiper = new Swiper(".mySwiper", {
      cssMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewheel: true,
      keyboard: true,
    });
  }
}
function destroySwiper() {
  if (swiper && window.innerWidth >= 540) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

initSwiper();
window.addEventListener("resize", () => {
  initSwiper();
  destroySwiper();
});
const moreImg = document.querySelector('.more-img');
document.getElementById('toggleButton').addEventListener('click', function(event) {
  event.preventDefault();  
  
  const hiddenItems = document.querySelectorAll('#hidden');
  if (hiddenItems[0].style.display === 'none' || hiddenItems[0].style.display === '') {
    hiddenItems.forEach(item => {
      item.style.display = 'flex';
    });
    document.getElementById('toggleButton').textContent = 'Скрыть';
    moreImg.style.transform = "rotate(180deg)"; 
  } else {
    hiddenItems.forEach(item => {
      item.style.display = 'none';
    });
    document.getElementById('toggleButton').textContent = 'Показать все';
    moreImg.style.transform = "rotate(0deg)";  
  }
});

function toggleMenuVisibility() {
  const swiperMenu = document.querySelector('.mySwiper');
  const menuMain = document.getElementById('menu-main');
  const more = document.getElementById('more');

  if (window.innerWidth < 540) {
    swiperMenu.style.display = 'block';
    menuMain.style.display = 'none';
    more.style.display = 'none';
  } else {
    swiperMenu.style.display = 'none';
    menuMain.style.display = 'flex';
    more.style.display = 'flex';
  }
}