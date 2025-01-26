"use strict";
let swiper;
function initSwiper() {
  if (window.innerWidth < 576) {
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

