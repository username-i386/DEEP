'use strict'

const iconMenu = document.querySelector('.menu__icon')
if (iconMenu) {
   const menuBody = document.querySelector('.menu__body')
   iconMenu.addEventListener('click', e => {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active')
      menuBody.classList.toggle('_active')
   })
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
   document.body.classList.add('_touch')
   const menuArrows = document.querySelectorAll('.menu__arrow')
   if (menuArrows.length > 0) {
      for (let i = 0; i < menuArrows.length; i++) {
         const menuArrow = menuArrows[0];
         menuArrow.addEventListener('click', e => {
            menuArrow.parentElement.classList.toggle('_active')
         })
      }
   }
} else document.body.classList.add('_pc')