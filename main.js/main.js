/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/accordion.js":
/*!*************************!*\
  !*** ./js/accordion.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const dt = document.querySelectorAll('[data-anime=\"accordion\"] dt');\n  const dd = document.querySelectorAll('[data-anime=\"accordion\"] dd');\n\n  dd[0].classList.add(\"ativo\");\n\n  function mostra() {\n    this.nextElementSibling.classList.toggle(\"ativo\");\n  }\n  dt.forEach((item) => {\n    item.addEventListener(\"click\", mostra);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/accordion.js?");

/***/ }),

/***/ "./js/anima-numeros.js":
/*!*****************************!*\
  !*** ./js/anima-numeros.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  const numeros = document.querySelectorAll(\"[data-numero\");\n  function animaNumeros() {\n    numeros.forEach((n) => {\n      const numero = +n.innerText;\n      const divisor = Math.floor(numero / 100);\n\n      let i = 0;\n      const counter = setInterval(() => {\n        i += divisor;\n        n.innerText = i;\n\n        if (i > numero) {\n          n.innerText = numero;\n          clearInterval(counter);\n        }\n      }, Math.random() * 50);\n    });\n  }\n\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(\"ativo\")) {\n      animaNumeros();\n    }\n  }\n  const target = document.querySelector(\".numeros\");\n  const observer = new MutationObserver(handleMutation);\n\n  observer.observe(target, { attributes: true });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/anima-numeros.js?");

/***/ }),

/***/ "./js/animaScroll.js":
/*!***************************!*\
  !*** ./js/animaScroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaScroll)\n/* harmony export */ });\nfunction animaScroll() {\n  const sections = document.querySelectorAll('[data-anima=\"scroll\"]');\n\n  const altura = window.innerHeight * 0.6;\n\n  function anima() {\n    sections.forEach((section) => {\n      const topo = section.getBoundingClientRect().top;\n      if (topo <= altura) {\n        if(!section.classList.contains('ativo')){\n          section.classList.add(\"ativo\");\n\n        }\n      }\n    });\n  }\n  window.addEventListener(\"scroll\", anima);\n\n  anima();\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/animaScroll.js?");

/***/ }),

/***/ "./js/click-outside.js":
/*!*****************************!*\
  !*** ./js/click-outside.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outterClick)\n/* harmony export */ });\nfunction outterClick(element, events, callback) {\n    const html = document.documentElement;\n\n    function handleOutterClick(event) {\n      if (!element.contains(event.target)) {\n        events.forEach((userEvent) => {\n          html.removeEventListener(userEvent, handleOutterClick);\n          element.removeAttribute(\"data-outside\");\n        });\n        callback();\n      }\n    }\n    if (!element.hasAttribute(\"data-outside\")) {\n      events.forEach((userEvent) => {\n          setTimeout(() => {\n            html.addEventListener(userEvent, handleOutterClick);\n          })\n        element.setAttribute(\"data-outside\", \"\");\n      });\n    }\n\n  }\n\n//# sourceURL=webpack://animais-fantasticos/./js/click-outside.js?");

/***/ }),

/***/ "./js/dropdownMenu.js":
/*!****************************!*\
  !*** ./js/dropdownMenu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropdown)\n/* harmony export */ });\n/* harmony import */ var _click_outside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click-outside.js */ \"./js/click-outside.js\");\n\n\nfunction dropdown() {\n  const menus = document.querySelectorAll(\"[data-dropdown]\");\n\n  function openDropDown(event) {\n    event.preventDefault();\n    this.classList.add(\"ativo\");\n    \n    (0,_click_outside_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, [\"click\", \"touchstart\"], () => {\n      this.classList.remove(\"ativo\");\n    });\n  }\n\n  [\"click\", \"touchstart\"].forEach((userEvent) => {\n    menus.forEach((menu) => {\n      menu.addEventListener(userEvent, openDropDown);\n    });\n  });\n\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/dropdownMenu.js?");

/***/ }),

/***/ "./js/fetch-bitcoin.js":
/*!*****************************!*\
  !*** ./js/fetch-bitcoin.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n\n    async function fetchValue() {\n        const valorBitcoin = document.querySelector('.btc-preco')\n        const bitcoin = await fetch('https://www.blockchain.com/ticker');\n        const bitcoinJSON = await bitcoin.json();\n        valorBitcoin.innerText = (1000 / bitcoinJSON.BRL.buy).toFixed(4);\n    }\n    fetchValue();\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/functionamento.js":
/*!******************************!*\
  !*** ./js/functionamento.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector(\"[data-semana]\");\n\n  const data = new Date();\n\n  const hoje = data.getDay();\n  const horaAgora = data.getHours();\n\n  const aberturaDias = funcionamento.dataset.semana.split(\",\").map(Number);\n  const aberturaHorario = funcionamento.dataset.horario.split(\",\").map(Number);\n\n  if (\n    aberturaDias.indexOf(hoje) !== -1 &&\n    horaAgora > aberturaHorario[0] &&\n    horaAgora < aberturaHorario[1]\n  ) {\n    funcionamento.classList.add(\"aberto\");\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/functionamento.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const animaisImg = document.querySelectorAll('[data-tab=\"lista\"] li');\n  const animaisDesc = document.querySelectorAll('[data-tab=\"content\"] section');\n\n  function exibe(index) {\n    animaisDesc.forEach((item) => {\n      item.classList.remove(\"ativo\");\n    });\n    const direcao = animaisDesc[index].dataset.anime;\n    animaisDesc[index].classList.add(\"ativo\", direcao);\n  }\n  if (animaisImg.length && animaisDesc.length) {\n    animaisDesc[0].classList.add(\"ativo\", \"show-right\");\n\n    animaisImg.forEach((img, index) => {\n      img.addEventListener(\"click\", () =>{\n        exibe(index);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/main.js?");

/***/ }),

/***/ "./js/menu-mobile.js":
/*!***************************!*\
  !*** ./js/menu-mobile.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _click_outside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click-outside.js */ \"./js/click-outside.js\");\n\n\nfunction initMenuMobile() {\n  const botao = document.querySelector(\"button\");\n  const menu = document.querySelector('[data-menu=\"list');\n  \n  function showMenu() {\n    menu.classList.toggle(\"ativo\");\n    botao.classList.toggle(\"ativo\");\n    \n    (0,_click_outside_js__WEBPACK_IMPORTED_MODULE_0__.default)(menu, [\"click\", \"touchstart\"], () => {\n      menu.classList.remove(\"ativo\");\n      botao.classList.remove(\"ativo\");\n    });\n  }\n\n  botao.addEventListener(\"click\", showMenu);\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/menu-mobile.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const abrir = document.querySelector('[data-modal=\"abrir\"]');\n  const fechar = document.querySelector('[data-modal=\"fechar\"]');\n  const container = document.querySelector('[data-modal=\"container\"]');\n\n  function toggleModal(event) {\n    event.preventDefault();\n    container.classList.toggle(\"ativo\");\n  }\n  function clicarFora(event) {\n    if (event.target === this) {\n      toggleModal(event);\n    }\n  }\n  abrir.addEventListener(\"click\", toggleModal);\n  fechar.addEventListener(\"click\", toggleModal);\n  container.addEventListener(\"click\", clicarFora);\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modal.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.js */ \"./js/accordion.js\");\n/* harmony import */ var _animaScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animaScroll.js */ \"./js/animaScroll.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n/* harmony import */ var _scrollSuave_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollSuave.js */ \"./js/scrollSuave.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ \"./js/modal.js\");\n/* harmony import */ var _toolTip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolTip.js */ \"./js/toolTip.js\");\n/* harmony import */ var _dropdownMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdownMenu.js */ \"./js/dropdownMenu.js\");\n/* harmony import */ var _menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-mobile.js */ \"./js/menu-mobile.js\");\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/anima-numeros.js\");\n/* harmony import */ var _functionamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functionamento.js */ \"./js/functionamento.js\");\n/* harmony import */ var _fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fetch-bitcoin.js */ \"./js/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_accordion_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_animaScroll_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_main_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_scrollSuave_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_toolTip_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_8__.default)();\n(0,_functionamento_js__WEBPACK_IMPORTED_MODULE_9__.default)();\n(0,_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__.default)();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ }),

/***/ "./js/scrollSuave.js":
/*!***************************!*\
  !*** ./js/scrollSuave.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\n  const links = document.querySelectorAll('a[href^=\"#\"]');\n\n  function scrollDown(event) {\n    event.preventDefault();\n    const href = event.target.getAttribute(\"href\");\n    const atributo = document.querySelector(href);\n\n    atributo.scrollIntoView({\n      behavior: \"smooth\",\n    });\n  }\n  links.forEach((link) => {\n    link.addEventListener(\"click\", scrollDown);\n  });\n}\ninitScrollSuave();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/scrollSuave.js?");

/***/ }),

/***/ "./js/toolTip.js":
/*!***********************!*\
  !*** ./js/toolTip.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\nfunction initToolTip() {\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\n\n  function criarToolTip(element) {\n    const tooltipbox = document.createElement(\"div\");\n    tooltipbox.classList.add(\"tooltip\");\n    const text = element.getAttribute(\"aria-label\");\n    tooltipbox.innerText = text;\n    document.body.appendChild(tooltipbox);\n\n    return tooltipbox;\n  }\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipbox.style.top = `${event.pageY + 10  }px`;\n      this.tooltipbox.style.left = `${event.pageX + 10  }px`;\n    },\n  };\n  const deleta = {\n    handleEvent() {\n      this.caixa.remove();\n      this.element.removeEventListener(\"mouseleave\", deleta);\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\n    },\n  };\n\n  function onMouseOver() {\n    const tooltipbox = criarToolTip(this);\n\n    onMouseMove.tooltipbox = tooltipbox;\n    this.addEventListener(\"mousemove\", onMouseMove);\n\n    deleta.caixa = tooltipbox;\n    deleta.element = this;\n    this.addEventListener(\"mouseleave\", deleta);\n  }\n  \n  tooltips.forEach((item) => {\n    item.addEventListener(\"mouseover\", onMouseOver);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/toolTip.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;