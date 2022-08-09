// CSS
import "sanitize.css";
import "normalize.css";
import "./src/css/fonts.css";
import "./src/css/vars.css";
import "./src/css/style.css";
import "./src/css/button.css";
import "./src/css/header.css";
import "./src/css/content.css";
import "./src/css/footer.css";
import "./src/css/scroll.css";

// CSS MEDIA
import "./src/css/media.css";

// JS
import "./src/js/index.js";

// SPLIDE JS
import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#slider-advantages', {
    perPage: 1,
    perMove: 1,
    pagination: false,
    arrows: false
  }).mount();
});
