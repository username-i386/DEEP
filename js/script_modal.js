'use strict'

const buyBtn = document.querySelectorAll('#buy_btn')
for (let index = 0; index < buyBtn.length; index++) {
   buyBtn[index].addEventListener('click', e => {
      setModal()
   })
}

const modalWindow = document.querySelector('.modal')

function setModal() {
   modalWindow.style.display = 'block'
   document.body.style.overflow = 'hidden'
}

const modalBtn = document.querySelectorAll('#modal__btn')

for (let index = 0; index < modalBtn.length; index++) {
   modalBtn[index].addEventListener('click', e => {
      modalWindow.style.display = 'none'
      document.body.style.overflow = 'auto'
   })
}



