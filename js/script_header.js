'use strict'

const headerText = `
         <div class="header__container container">
            <div class="header__logo">
               <img src="src/logo.svg" alt="DEEP">
            </div>
            <div class="header__menu menu">
               <div class="menu__icon">
                  <span></span>
               </div>
               <nav class="menu__body">
                  <ul class="menu__list">
                     <li><a href="index.html" class="menu__link">Главная</a></li>
                     <li>
                        <a href="researcher.html" class="menu__link">Исследования</a>
                        <span class="menu__arrow"></span>
                        <ul class="menu__sub-list">
                           <li><a href="discovery.html" class="menu__sub-link">Открытие</a></li>
                           <li><a href="ru-researcher.html" class="menu__sub-link">Русские исследователи</a></li>
                           <li><a href="diving.html" class="menu__sub-link">Погружение</a></li>
                           <li><a href="one-pice.html" class="menu__sub-link">Добыча грунта</a></li>
                           <li><a href="film.html" class="menu__sub-link">Съемки фильма</a></li>
                        </ul>
                     </li>
                     <li><a href="fauna.html" class="menu__link">Фауна</a></li>
                     <li><a href="library.html" class="menu__link">Библиотека</a></li>
                     <li><a href="about_us.html" class="menu__link">О нас</a></li>
                  </ul>
               </nav>
            </div>
         </div>
`
function setHeader() {
   const header = document.createElement('header')
   header.classList.add('header')
   header.innerHTML = headerText
   document.body.insertAdjacentElement('afterbegin', header)
}

setHeader()

const links = document.getElementsByClassName('menu__link')
const title = document.getElementsByTagName('title')[0].innerHTML
const titleText = [
   'Главная',
   'Исследования',
   'Фауна',
   'Библиотека',
   'О нас'
]

for (let index = 0; index < titleText.length; index++) {
   if (title === `DEEP - ${titleText[index]}`) {
      links[index].classList.add('menu__link-active')
   }
}

// const mainScreenLink       = 'DEEP - Главная'
// const researcherScreenLink = 'DEEP - Исследования'
// const faunaScreenLink      = 'DEEP - Фауна'
// const libraryScreenLink    = 'DEEP - Библиотека'
// const basketScreenLink     = 'DEEP - Корзина'
// const aboutUsScreenLink    = 'DEEP - О нас'

// switch (title) {
//    case mainScreenLink:
//       links[0].classList.add('menu__link-active')
//       break;
//    case researcherScreenLink:
//       links[1].classList.add('menu__link-active')
//       break;
//    case faunaScreenLink:
//       links[2].classList.add('menu__link-active')
//       break;
//    case libraryScreenLink:
//       links[3].classList.add('menu__link-active')
//       break;
//    case basketScreenLink:
//       links[4].classList.add('menu__link-active')
//       break;
//    case aboutUsScreenLink:
//       links[5].classList.add('menu__link-active')
//       break;
// }

