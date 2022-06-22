'use strict'
let counter = 0
const logo = document.querySelector('.header__logo')
const mainTitle = document.querySelector('.cap__title')
logo.addEventListener('click', e => {
   if (counter === 7) {
      mainTitle.innerHTML = 'Марианская дырочка'
   }
   counter++
})