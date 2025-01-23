"use strict";
// const moreImg = document.querySelector('.more-img');
// document.getElementById('toggleButton').addEventListener('click', function(event) {
//   event.preventDefault();  // Предотвращаем переход по ссылке
  
//   // Находим все элементы с id="hidden"
//   const hiddenItems = document.querySelectorAll('#hidden');
  
//   // Проверяем, скрыты ли элементы и меняем их состояние
//   if (hiddenItems[0].style.display === 'none' || hiddenItems[0].style.display === '') {
//     // Показываем скрытые элементы
//     hiddenItems.forEach(item => {
//       item.style.display = 'flex';
//     });
//     // Меняем текст кнопки на "Скрыть"
//     document.getElementById('toggleButton').textContent = 'Скрыть';
//     moreImg.style.transform = "rotate(180deg)"; 
//   } else {
//     // Скрываем элементы
//     hiddenItems.forEach(item => {
//       item.style.display = 'none';
//     });
//     // Меняем текст кнопки на "Показать все"
//     document.getElementById('toggleButton').textContent = 'Показать все';
//     moreImg.style.transform = "rotate(0deg)";
//   }
// });
let swiper;
function initSwiper() {
  if (window.innerWidth < 540) {
    swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
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
// Инициализация Swiper при загрузке страницы
initSwiper();
// Обработка изменения размера окна
window.addEventListener("resize", () => {
  initSwiper();
  destroySwiper();
});