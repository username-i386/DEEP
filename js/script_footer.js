'use strict'

const footerText = `
   <div class="container">
         <div class="footer__logo">
            <img src="src/logo.svg" alt="logo">
         </div>
         <div class="footer__flex-container">
            <div class="footer__flex-item">
               <p>Свяжитесь с нами</p>
               <div class="footer__society">
                  <a href="https://vk.com/shortpointname" target="_block">
                  <img src="src/vk.svg" alt="vk">
               </a>
               <a href="https://t.me/+sG0MsoMEoV5hMWEy" target="_block">
                  <img src="src/telegram.svg" alt="telegram">
               </a>
               </div>
            </div>
            <div class="footer__flex-item">
               <p>Поддержите нас</p>
               <div class="footer__pay">
                  <iframe src="https://widget.qiwi.com/widgets/big-button-220x100?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iP4xMm7TGKDqK2YusPGTnMMLonYzSmiz77Maeyhdsz8EPDuwfXCFBAeJFT1yJVVNhPExSWBUCjPpuj5iDZ298CqBkAc4JvEQXFTRCyWXdfH&noCache=true" width="220" height="100"allowTransparency="true" scrolling="no" frameBorder="0"></iframe>
               </div>
            </div>
         </div>
      </div>
`

function setFooter() {
   const footer = document.createElement('footer')
   footer.classList.add('footer')
   footer.innerHTML = footerText
   document.body.insertAdjacentElement('beforeend', footer)
}

setFooter()