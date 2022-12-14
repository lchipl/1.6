/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

var closeCall = document.querySelector('.close-call'),
    closeMessage = document.querySelector('.close-message'),
    modalCall = document.querySelector('.modal__call'),
    modalMessage = document.querySelector('.modal__message'),
    contactsCall = document.querySelectorAll('.contacts__call'),
    contactsMessage = document.querySelectorAll('.contacts__message'),
    burgerMenu = document.querySelector('.burger__menu'),
    burgerButton = document.querySelector('.burger__icon'),
    burgerList = document.querySelector('.burger__list'),
    burgerListItems = document.querySelectorAll('.burger__list-item'),
    modalOverlay = document.querySelector('.modal-overlay'),
    burgerOverlay = document.querySelector('.burger-overlay'),
    serviceList = document.querySelector('.service__list'),
    serviceListItems = document.querySelectorAll('.service__list-item');
serviceList.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    serviceListItems.forEach(function (item) {
      item.classList.remove('service__list-item-active');
    });
    ev.target.classList.toggle('service__list-item-active');
  }
});
burgerButton.addEventListener('click', function () {
  burgerButton.classList.toggle('burger__icon-active');
  burgerMenu.classList.toggle('burger-open');
  burgerOverlay.classList.toggle('disabled');
});
closeCall.addEventListener('click', function () {
  modalCall.classList.toggle('modal__closed');
  modalOverlay.classList.toggle('disabled');
  document.body.style.overflow = '';
});
closeMessage.addEventListener('click', function () {
  modalMessage.classList.toggle('modal__closed');
  modalOverlay.classList.toggle('disabled');
  document.body.style.overflow = '';
});
contactsCall.forEach(function (item) {
  item.addEventListener('click', function () {
    modalCall.classList.toggle('modal__closed');
    modalOverlay.classList.toggle('disabled');
    document.body.style.overflow = 'hidden';
  });
});
contactsMessage.forEach(function (item) {
  item.addEventListener('click', function () {
    modalMessage.classList.toggle('modal__closed');
    modalOverlay.classList.toggle('disabled');
    document.body.style.overflow = 'hidden';
  });
});
modalOverlay.addEventListener('click', function (ev) {
  if (ev.target === modalOverlay) {
    modalCall.classList.add('modal__closed');
    modalMessage.classList.add('modal__closed');
    modalOverlay.classList.add('disabled');
    document.body.style.overflow = '';
  }
});
burgerOverlay.addEventListener('click', function (ev) {
  if (ev.target === burgerOverlay) {
    burgerMenu.classList.remove('burger-open');
    burgerOverlay.classList.add('disabled');
    burgerButton.classList.remove('burger__icon-active');
  }
});
burgerList.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    burgerListItems.forEach(function (item) {
      item.classList.remove('active-item');
    });
    ev.target.classList.toggle('active-item');
  }
});

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swiper.js */ "./swiper.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index.js */ "./index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./swiper.js":
/*!*******************!*\
  !*** ./swiper.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");

var sliders = document.querySelectorAll('.swiper');
sliders.forEach(function (el) {
  var mySlider;

  function mobileSlider() {
    if (window.innerWidth <= 767 && el.dataset.mobile == 'false') {
      mySlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
        slidesPerView: 1.15,
        spaceBetween: 16,
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
        loop: true,
        pagination: {
          el: el.querySelector('.swiper-pagination')
        } // Navigation arrows
        // navigation: {
        //   nextEl: el.querySelector('.swiper-button-next'),
        //   prevEl: el.querySelector('.swiper-button-prev'),
        // },

      });
      el.dataset.mobile = 'true';
    }

    if (window.innerWidth > 767) {
      el.dataset.mobile = 'false';

      if (el.classList.contains('swiper-initialized')) {
        mySlider.destroy();
      }
    }
  }

  mobileSlider();
  window.addEventListener('resize', function () {
    mobileSlider();
  });
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/logo.svg */ "./assets/img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/logo/Bitmap.png */ "./assets/img/logo/Bitmap.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/logo/samsung.png */ "./assets/img/logo/samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/logo/Apple.png */ "./assets/img/logo/Apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/logo/Bosch.png */ "./assets/img/logo/Bosch.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/logo/HP.png */ "./assets/img/logo/HP.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/logo/Acer.png */ "./assets/img/logo/Acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/logo/Viewsonic.png */ "./assets/img/logo/Viewsonic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/logo/Sony.png */ "./assets/img/logo/Sony.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var code = "<!DOCTYPE html>\n<html lang=\"ru\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\n  <title>Webcore 1.6</title>\n</head>\n\n<body>\n  <div class=\"container\">\n    <div class=\"burger-overlay disabled\"></div>\n    <div class=\"modal-overlay disabled\">\n      <div class=\"modal modal__call modal__closed\">\n        <div class=\"close-button close-call icon\"></div>\n      <h2 class=\"modal__title block-title\">???????????????? ????????????</h2>\n      <input type=\"text\" id=\"call__tel\" class=\"modal__input\" placeholder=\"??????????????\">\n      <label for=\"call__tel\"></label>\n      <p class=\"modal__agreement\">\n        ?????????????? ????????????????????????, ???? ?????????? ???????????????? ??????\n        <a href=\"#\">?????????????????? ???????????????????????? ????????????</a>\n        ???????????????????????????? ?? ?????????? \n        <a href=\"#\">?????????????????? ????????????????????????????????????</a>\n      </p>\n      <div class=\"modal__submit-button button\">&nbsp;&nbsp;??????????????????</div>\n      </div>\n\n      <div class=\"modal modal__message modal__closed\">\n        <div class=\"close-button close-message icon\"></div>\n        <h2 class=\"modal__title block-title\">???????????????? ??????????</h2>\n        <input type=\"text\" id=\"message__name\" class=\"modal__input\" placeholder=\"??????\">\n        <label for=\"message__name\"></label>\n        <input type=\"tel\" id=\"message__tel\" class=\"modal__input\" placeholder=\"??????????????\">\n        <label for=\"message__tel\"></label>\n        <input type=\"email\" id=\"message__email\" class=\"modal__input\" placeholder=\"?????????????????????? ??????????\">\n        <label for=\"message__email\"></label>\n        <textarea id=\"message__message\" class=\"modal__input modal__textarea\" placeholder=\"??????????????????\" rows=\"5\" cols=\"33\"></textarea>\n        <label for=\"message__message\"></label>\n        <p class=\"modal__agreement\">\n          ?????????????? ????????????????????????, ???? ?????????? ???????????????? ??????\n          <a href=\"#\">?????????????????? ???????????????????????? ????????????</a>\n          ???????????????????????????? ?? ?????????? \n          <a href=\"#\">?????????????????? ????????????????????????????????????</a>\n        </p>\n        <div class=\"modal__submit-button button\">&nbsp;&nbsp;??????????????????</div>\n      </div>\n    </div>\n\n    <header class=\"header\">\n      <div class=\"header__left\">\n        \n        <div class=\"burger\">\n          <div class=\"icon burger__icon\"><span class=\"line\"></span></div>\n          <aside class=\"burger__menu\">\n            <div class=\"burger__menu-header\">\n              <div class=\"burger__logo logo\">\n                <a href=\"\" class=\"logo-link\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"logo-img\">\n                </a>\n              </div>\n              <div class=\"burger__search icon\"></div>\n            </div>\n            <nav class=\"burger__nav\">\n              <ul class=\"burger__list\">\n                <li class=\"burger__list-item active-item\">???????????? ??????????????</li>\n                <li class=\"burger__list-item\">???????????? ?? ??????????????</li>\n                <li class=\"burger__list-item\">?????????????????????????? ????????????????</li>\n                <li class=\"burger__list-item\">?????????????????? ??????????????</li>\n                <li class=\"burger__list-item\">??????????????????</li>\n                <li class=\"burger__list-item\">????????????????????????????</li>\n                <li class=\"burger__list-item\">???????? ?????????????????? ????????????</li>\n                <li class=\"burger__list-item\">????????????????</li>\n              </ul>\n            </nav>\n            <div class=\"burger__contacts\">\n              <div class=\"contacts__call icon\"></div>\n              <div class=\"contacts__message icon\"></div>\n              <div class=\"contacts__profile icon\"></div>\n            </div>\n            <div class=\"burger__footer\">\n              <div class=\"email\">mail@cps.com</div>\n              <div class=\"tel\">8 800 890 8900</div>\n              <div class=\"language\">\n                <span class=\"ru lang\">RU</span>\n                <span class=\"en lang\">EN</span>\n                <span class=\"ch lang\">CH</span>\n              </div>\n            </div>\n          </aside>\n        </div>\n\n        <div class=\"logo logo-mobile\">\n          <a href=\"\" class=\"logo-link\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"logo-img\">\n          </a>\n        </div>\n      </div>\n\n      <div class=\"header__right\">\n        <div class=\"header__contacts contacts\">\n          <div class=\"contacts__call icon\">\n          </div>\n          <div class=\"contacts__message icon\">\n          </div>\n          <div class=\"contacts__profile icon\">\n          </div>\n        </div>\n        <div class=\"header__check\">\n          <span class=\"header__check-description\">???????????????? ????????????</span>\n          <div class=\"repair-icon icon\"></div>\n          <span class=\"header__check-description\">???????????? ??????????????</span>\n          <div class=\"checkstatus-icon icon\"></div>\n        </div>\n      </div>\n      \n    </header>\n\n    <main class=\"main\">\n      <section class=\"service\">\n        <div class=\"service__top\">\n          <h1 class=\"service__title\">???????????? ?? ??????????????</h1>\n          <nav class=\"sevice__nav\">\n            <ul class=\"service__list\">\n              <li class=\"service__list-item service__list-item-active\">?????????????????????????? ????????????????????</li>\n              <li class=\"service__list-item\">???????????????????????????? ????????????</li>\n              <li class=\"service__list-item\">???????? ???? ????????????</li>\n              <li class=\"service__list-item\">???????????? ?????????????????? ??????????????</li>\n              <li class=\"service__list-item\">?????????????????????? ????????</li>\n              <li class=\"service__list-item\">????????????</li>\n            </ul>\n          </nav>\n        </div>\n      </section>\n      <div class=\"about\">\n        <div class=\"about__spoiler-wrapper spoiler-wrapper\">\n          <input type=\"checkbox\" id=\"about__spoiler-checker\">\n          <label for=\"about__spoiler-checker\" class=\"about__spoiler spoiler\"><span>???????????? ??????????</span></label>\n          <p class=\"about__description\">\n            ???? ???????????????? ???????????????????????????? ?????????????????? ?????????????? ???? ?????????????? ?????????????? Dell. ???????????? ??\n            ?????? ???? ???????????? ?????????????????????????????? ???????? ?????????????? Dell ?? ?????????????????????? ?????????????????? ??????????????????????????.<br><br>\n\n            ???? ?????????????? ???????????????? ?? 1992 ???????? ?? ?????????????????? ?????????????????? ?????????????????? ????????????????, ?????? ???????????????????????? ??????????????\n            ???????????????????? ???????????????????? ????????????????. ???? ???????????????? ??????, ?????? ?? ?????? ???????????????????? ???? ?????????????????????????? ??, ?? ???????? ??????????????,\n            ???????????????? ?????? ???????????? ?? ??????????????.???? ?????????????? ???????????????? ?? 1992 ???????? ?? ?????????????????? ?????????????????? ?????????????????? ????????????????, ?????? ???????????????????????? ??????????????\n            ???????????????????? ???????????????????? ????????????????. ???? ???????????????? ??????, ?????? ?? ?????? ???????????????????? ???? ?????????????????????????? ??, ?? ???????? ??????????????,\n            ???????????????? ?????? ???????????? ?? ??????????????.\n          </p>\n        </div>\n        <div class=\"about__img\"></div>\n      </div>\n      <section class=\"repair\">\n        <div class=\"title-wrapper block-title\">\n          <h3 class=\"repair__title-brand gradient-title\">???????????? ?????????????? ?????????????????? ??????????????</h3>\n        </div>\n\n        <div class=\"spoiler-wrapper\">\n          <input type=\"checkbox\" id=\"repair__spoiler-checker\">\n          <label for=\"repair__spoiler-checker\" class=\"repair__spoiler spoiler\"><span>???????????????? ??????</span></label>\n\n          <div class=\"swiper brand-swiper\" data-mobile=\"false\">\n            <div class=\"swiper-wrapper brand-swiper-wrapper\">\n              <div class=\"swiper-slide brand-item\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide brand-item\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide brand-item\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide brand-item\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide brand-item\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide brand-item\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide brand-item\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide brand-item\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide brand-item\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide brand-item\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide brand-item\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide brand-item\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide brand-item\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n\n            <div class=\"swiper-pagination\"></div>\n          </div>\n        </div>\n\n        <div class=\"title-wrapper block-title\">\n          <h3 class=\"repair__title-technic gradient-title\">???????????? ?????????????????? ?????????? ??????????????</h3>\n        </div>\n        <div class=\"spoiler-wrapper\">\n          <input type=\"checkbox\" id=\"technic__spoiler-checker\">\n          <label for=\"technic__spoiler-checker\" class=\"technic__spoiler spoiler\"><span>???????????????? ??????</span></label>\n          \n          <div class=\"swiper technic-swiper\" data-mobile=\"false\">\n            <div class=\"swiper-wrapper technic-swiper-wrapper\">\n              <div class=\"swiper-slide technic-item\">\n                <p>???????????? ??????????????????</p>\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide technic-item\">\n                <p>???????????? ??????????????????</p>\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide technic-item\">\n                <p>???????????? ????</p>\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide technic-item\">\n                <p>???????????? ????????????????????</p>\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide technic-item\">\n                <p>???????????? ?????????????????? ??????????????????</p>\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide technic-item\">\n                <p>???????????? ???????????????? ????????????</p>\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide technic-item\">\n                <p>???????????? ??????????????????????</p>\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide technic-item\">\n                <p>???????????? ???????????? ??????????????</p>\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"swiper-slide technic-item\">\n                <p>???????????? ????????????????</p>\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n            <div class=\"swiper-pagination\"></div>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"price\">\n        <div class=\"title-wrapper\">\n          <h3 class=\"price__title gradient-title\">???????? ???? ????????????</h3>\n        </div>\n        <div class=\"swiper price-swiper\" data-mobile=\"false\">\n          <div class=\"price-headers\">\n            <p>?????????????????? ????????????</p>\n            <p>????????</p>\n            <p>????????</p>\n            <button class=\"button price__button\">\n              <span class=\"button__inner\">????????????????</span>\n            </button>\n          </div>\n          <div class=\"swiper-wrapper price-swiper-wrapper\">\n            <div class=\"swiper-slide price-item\">\n              <div class=\"service-name\">\n                <p>?????????????????? ????????????</p>\n                <p>??????????????????????</p>\n              </div>\n              <div class=\"service-price\">\n                <p>????????</p>\n                <p>??????????????????</p>\n              </div>\n              <div class=\"service-period\">\n                <p>????????</p>\n                <p>30 ??????</p>\n              </div>\n              <button class=\"button price__button\">\n                <span class=\"button__inner\">????????????????</span>\n              </button>\n            </div>\n            <div class=\"swiper-slide price-item\">\n              <div class=\"service-name\">\n                <p>?????????????????? ????????????</p>\n                <p>???????????? ??????????????</p>\n              </div>\n              <div class=\"service-price\">\n                <p>????????</p>\n                <p>1 000 ???</p>\n              </div>\n              <div class=\"service-period\">\n                <p>????????</p>\n                <p>30-120 ??????</p>\n              </div>\n              <button class=\"button price__button\">\n                <span class=\"button__inner\">????????????????</span>\n              </button>\n            </div>\n            <div class=\"swiper-slide price-item\">\n              <div class=\"service-name\">\n                <p>?????????????????? ????????????</p>\n                <p>???????????? ?????????????????????????????? ????????????????</p>\n              </div>\n              <div class=\"service-price\">\n                <p>????????</p>\n                <p>1 000 ???</p>\n              </div>\n              <div class=\"service-period\">\n                <p>????????</p>\n                <p>30-120 ??????</p>\n              </div>\n              <button class=\"button price__button\">\n                <span class=\"button__inner\">????????????????</span>\n              </button>\n            </div>\n            <div class=\"swiper-slide price-item\">\n              <div class=\"service-name\">\n                <p>?????????????????? ????????????</p>\n                <p>???????????????????????? ?? ?????????????? ???????????????????????? ????????????????????</p>\n              </div>\n              <div class=\"service-price\">\n                <p>????????</p>\n                <p>1 000 ???</p>\n              </div>\n              <div class=\"service-period\">\n                <p>????????</p>\n                <p>30-120 ??????</p>\n              </div>\n              <button class=\"button price__button\">\n                <span class=\"button__inner\">????????????????</span>\n              </button>\n            </div>\n            <div class=\"swiper-slide price-item\">\n              <div class=\"service-name\">\n                <p>?????????????????? ????????????</p>\n                <p>???????????? ???????????????????????? ??????????????????????</p>\n              </div>\n              <div class=\"service-price\">\n                <p>????????</p>\n                <p>1 000 ???</p>\n              </div>\n              <div class=\"service-period\">\n                <p>????????</p>\n                <p>30-120 ??????</p>\n              </div>\n              <button class=\"button price__button\">\n                <span class=\"button__inner\">????????????????</span>\n              </button>\n            </div>\n          </div>\n          <div class=\"swiper-pagination\"></div>\n        </div>\n\n        <p class=\"price__description\">?????? ???????? ?????????????? ?? ???????????? ??????. ?????????????????? ?????????????? ?????????????? ???? ?????????????????? ????????????. ??????\n          ?????????????????? ?????????????????????????? ?????????????????????? ???? ???????????????????? ????????????????????????, ???????????????? ????????????.</p>\n        <p class=\"price__offer\">\n          <a href=\"\"><span>???????????????? ???????????????????????? ??????????????????????</span></a>\n        </p>\n      </section>\n    </main>\n\n    <footer class=\"footer\">\n      <p>?? 2019 CPS<br>\n        ?????????????????????? ???????????????? Apesong </p>\n      <p>???????????????? ????????????????????????????????????</p>\n      <p>????????????????????, ?????????????????????? ???? ???????????? ????????????????, ???? ???????????????? ?????????????????? ??????????????</p>\n    </footer>\n\n  </div>\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./assets/img/logo.svg":
/*!*****************************!*\
  !*** ./assets/img/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),

/***/ "./assets/img/logo/Acer.png":
/*!**********************************!*\
  !*** ./assets/img/logo/Acer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Acer.png";

/***/ }),

/***/ "./assets/img/logo/Apple.png":
/*!***********************************!*\
  !*** ./assets/img/logo/Apple.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Apple.png";

/***/ }),

/***/ "./assets/img/logo/Bitmap.png":
/*!************************************!*\
  !*** ./assets/img/logo/Bitmap.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Bitmap.png";

/***/ }),

/***/ "./assets/img/logo/Bosch.png":
/*!***********************************!*\
  !*** ./assets/img/logo/Bosch.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Bosch.png";

/***/ }),

/***/ "./assets/img/logo/HP.png":
/*!********************************!*\
  !*** ./assets/img/logo/HP.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/HP.png";

/***/ }),

/***/ "./assets/img/logo/Sony.png":
/*!**********************************!*\
  !*** ./assets/img/logo/Sony.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Sony.png";

/***/ }),

/***/ "./assets/img/logo/Viewsonic.png":
/*!***************************************!*\
  !*** ./assets/img/logo/Viewsonic.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Viewsonic.png";

/***/ }),

/***/ "./assets/img/logo/samsung.png":
/*!*************************************!*\
  !*** ./assets/img/logo/samsung.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/samsung.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-ca966d"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map