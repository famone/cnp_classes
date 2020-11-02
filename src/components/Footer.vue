<template>
  <footer class="footer">
  <div class="container-fluid">
    <div class="footer-box">
      <div class="footer__copyright">
        Copyright 2008 - 2020 CNP
      </div>
      <div class="footer__social-box">
        <a target="_blank" class="social-box__link " href="https://www.instagram.com/nikitapugachev/">
          <img src="https://nikitapugachev.com/wp-content/themes/np/assets/img/footer-inst.svg" alt="social">
        </a>
        <a target="_blank" class="social-box__link social-box__link--YT" href="#">
          <img src="https://nikitapugachev.com/wp-content/themes/np/assets/img/footer-YT.svg" alt="social">
        </a>
        <a target="_blank" class="social-box__link" href="#">
          <img src="https://nikitapugachev.com/wp-content/themes/np/assets/img/footer-facebook.svg" alt="social">
        </a>
        <a target="_blank"  class="social-box__link" href="http://t.me/nikitapugachev">
          <img src="https://nikitapugachev.com/wp-content/themes/np/assets/img/footer-telegram.svg" alt="social">
        </a>
        <a target="_blank"  class="social-box__link" href="https://api.whatsapp.com/send?phone=79219432699&text=">
          <img src="https://nikitapugachev.com/wp-content/themes/np/assets/img/footer-whatsapp.svg" alt="social">
        </a>
      </div>
      <div class="footer__documents">
        <router-link to="/politika" tag="a">
          Политика конфиденциальности
        </router-link>
        <router-link to="/soglashenie" tag="a">
          Пользовательское соглашение
        </router-link>
        <router-link to="/platezhi" tag="a">
          Безопасность платежей
        </router-link>
      </div>
      <div class="webink">
          <a target="_blank" href="https://webink.site/">Developed in Webink.</a>
        </div>
    </div>
  </div>
</footer>
</template>


<style>
  .webink{
    margin: 0 auto;
  }
  .webink a{
    color: #2E97E6!important;
    opacity: 1!important;
  }
  .webink:hover {
    animation: 1s myshake alternate;
  }
  @keyframes myshake{
    0% {
    transform: skewX(-15deg);
    }
    5% {
        transform: skewX(15deg);
    }
    10% {
        transform: skewX(-15deg);
    }
    15% {
        transform: skewX(15deg);
    }
    20% {
        transform: skewX(0deg);
    }
    100% {
        transform: skewX(0deg);
    }
  }


@media (max-width:991px) {
  .webink{
    margin:0;
    margin-top: 25px;
  }
}
</style>