  import { h, Component } from 'preact';
  import style from './style'; // if you create style file, you can import it


  export default () => ( // this is es6 function notation. equivalent to `function() {}`
    <footer class={style.main_footer}>
      <div class={style.container}>
        <div class={style.main_footer__wrap}>
          <div class={style.main_footer__first_main_footer__column}>
            <a href="/" class={style.main_footer__logo}></a>
            <p class={style.main_footer__text}>
                        The new Calendar of Content Ideas<br></br>
                        helps you create stunning<br></br>
                        social media posts
            </p>
            <p class={style.copy}>
                        © 2017 All Rights Reserved
            </p>
          </div>
          <nav class={style.main_footer__nav_main_footer__column}>
            <li class={style.main_footer__nav_item}>
              <a href="http://promorepublic.com/en/pricing.php">Pricing</a>
            </li>
            <li class={style.main_footer__nav_item}>
              <a href="http://promorepublic.com/en/agencies.php">Agencies</a>
            </li>
            <li class={style.main_footer__nav_item}>
              <a href="http://en.promorepublic.com/blog">Social Media Academy</a>
            </li>
            <li class={style.main_footer__nav_item}>
              <a href="http://promorepublic.com/docs/terms-and-conditions.PromoRepublic.pdf">Terms &amp; Conditions</a>
            </li>
            <li class={style.main_footer__nav_item}>
              <a href="http://promorepublic.com/docs/privacy-policy.PromoRepublic.pdf">Privacy Policy</a>
            </li>
          </nav>
          <nav class={style.main_footer__about_main_footer__column}>
            <p class={style.about_title}>Company:</p>
              <a href="http://promorepublic.com/en/about.php">About</a>
              <a href="http://promorepublic.com/en/press.php">Press</a>
              <a href="http://promorepublic.com/en/careers.php">Jobs</a>
              <a href="http://get.promorepublic.com/affiliate/">Affiliate Program</a>
              <a href="http://get.promorepublic.com/partners/">Partners</a>
          </nav>
          <div class={style.main_footer__integrations_main_footer__column}>
            <p class={style.integrations_title}>Integrations:</p>
            <a href="http://promorepublic.com/integrations-buffer/">Buffer</a>
            <a href="http://promorepublic.com/integrations-hubspot/">HubSpot</a>
            <a href="http://appdirectory.hootsuite.com/256/promorepublic">Hootsuite</a>
          </div>
          <div class={style.main_footer__contact_main_footer__column}>
            <div class={style.main_footer__socials}>
              <p class={style.social_title}>Follow us:</p>
              <div class={style.social_icons}>
                <a href="https://www.facebook.com/pages/PromoRepubli%D1%81com/951563951528918?ref=bookmarks" class={style.social_link}>
                  <i class={style.socicon_fb}></i>
                </a>
                <a href="https://twitter.com/promo_republic" class={style.social_link}>
                  <i class={style.socicon_tw}></i>
                </a>
                <a href="https://www.instagram.com/promorepublic/" class={style.social_link}>
                  <i class={style.socicon_inst}></i>
                </a>
              </div>
            </div>
            <div class={style.main_footer__contact_wrap}>
              <p class={style.main_footer__address}>
                <a href="https://www.google.com.ua/maps/place/PromoRepublic/@37.4455005,-122.164951,17z/data=!4m13!1m7!3m6!1s0x808fbb39dda2b151:0xd4e2740b4c22e34!2s470+Ramona+St,+Palo+Alto,+CA+94301,+USA!3b1!8m2!3d37.4455005!4d-122.1627623!3m4!1s0x808fbb39dda2c9fd:0xa4f5a29ed43fec52!8m2!3d37.4455004!4d-122.1627622">
                  470 Ramona St, Palo Alto, <br></br>
                  CA 94301, United States
                </a>
              </p>
              <a href="" class={style.main_footer__email}>support@promorepublic.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
