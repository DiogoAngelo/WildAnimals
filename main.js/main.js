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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n    constructor(list) {\n        this.accordionList = document.querySelectorAll(list);\n        this.activeClass = 'ativo';\n    }\n\n    toggleAccordion(item) {\n        item.nextElementSibling.classList.toggle(this.activeClass);\n    }\n\n    addAccordionEvent() {\n        this.accordionList.forEach((item) => {\n            item.addEventListener('click', () => this.toggleAccordion(item));\n        });\n    }\n\n    init() {\n        if (this.accordionList.length) {\n            this.toggleAccordion(this.accordionList[0]);\n            this.addAccordionEvent();\n        }\n \n    }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/accordion.js?");

/***/ }),

/***/ "./js/anima-numeros.js":
/*!*****************************!*\
  !*** ./js/anima-numeros.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]');\n\n    function animaNumeros() {\n        numeros.forEach((numero) => {\n            const total = +numero.innerText;\n            const divisor = Math.floor(total / 100);\n    \n            let start = 0\n            const counter = setInterval(() => {\n                start += divisor;\n                numero.innerText = start;\n                if(start > total) {\n                    clearInterval(counter);\n                }\n            }, 50 * Math.random());\n        });\n    }\n\n    function watchChanges(mutation) {\n        if(mutation[0].target.classList.contains('ativo')) {\n            animaNumeros();\n        }\n    }\n\n    const observer = new MutationObserver(watchChanges);\n    const target = document.querySelector('.numeros');\n\n    observer.observe(target, {attributes: true});\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/anima-numeros.js?");

/***/ }),

/***/ "./js/animaScroll.js":
/*!***************************!*\
  !*** ./js/animaScroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaScroll)\n/* harmony export */ });\nfunction initAnimaScroll() {\n    const blocos = document.querySelectorAll('[data-anima=\"scroll\"]');\n\n    const alturaTela = window.innerHeight * .6;\n    blocos[0].classList.add('ativo')\n    function mostraBloco() {\n        blocos.forEach((bloco) => {\n            const altura = bloco.getBoundingClientRect().top;\n\n            if(altura <= alturaTela) {\n                if(!bloco.classList.contains('ativo')) {\n                    bloco.classList.add('ativo');\n                }\n            }\n        });\n    }\n    window.addEventListener('scroll', mostraBloco);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/animaScroll.js?");

/***/ }),

/***/ "./js/click-outside.js":
/*!*****************************!*\
  !*** ./js/click-outside.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, callback) {\n    const html = document.documentElement;\n\n    function handleOutsideClick(event) {\n        if(!element.contains(event.target)) {\n            html.removeEventListener('click', handleOutsideClick);\n            element.removeAttribute('data-outside');\n            callback();\n        }\n    }\n    if(!element.hasAttribute('data-outside')) {\n        setTimeout(() => {\n            html.addEventListener('click', handleOutsideClick);\n        })\n    }\n    element.setAttribute('data-outside', ' ');\n\n\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/click-outside.js?");

/***/ }),

/***/ "./js/dropdownMenu.js":
/*!****************************!*\
  !*** ./js/dropdownMenu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDown)\n/* harmony export */ });\n/* harmony import */ var _click_outside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click-outside.js */ \"./js/click-outside.js\");\n\n\nfunction initDropDown() {\n    const menu = document.querySelector(\"[data-dropdown]\");\n\n    function openDropDown(event) {\n        event.preventDefault();\n        this.classList.add('ativo');\n        (0,_click_outside_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, () => {\n            this.classList.remove('ativo');\n        });\n    }\n    menu.addEventListener('click', openDropDown);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/dropdownMenu.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMain)\n/* harmony export */ });\nfunction initMain() {\n    const imgs = document.querySelectorAll('[data-tab=\"lista\"] li');\n    const descripts = document.querySelectorAll('[data-tab=\"content\"] section');\n\n    descripts[0].classList.add('ativo', 'show-right')\n\n    function openDescription(index) {\n        descripts.forEach((item) => {\n            item.classList.remove('ativo');\n        });\n        const direcao = descripts[index].dataset.anime;\n        descripts[index].classList.add('ativo', direcao);\n    }\n\n    imgs.forEach((img, index) => {\n        img.addEventListener('click', () => {\n            openDescription(index)\n        });\n    });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/main.js?");

/***/ }),

/***/ "./js/menu-mobile.js":
/*!***************************!*\
  !*** ./js/menu-mobile.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _click_outside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click-outside.js */ \"./js/click-outside.js\");\n\n\nfunction initMenuMobile() {\n\n    const botao = document.querySelector('[data-menu=\"button\"]');\n    const lista = document.querySelector('[data-menu=\"list\"]');\n\n    function openMenu() {\n        this.classList.add('ativo');\n        lista.classList.add('ativo');\n        (0,_click_outside_js__WEBPACK_IMPORTED_MODULE_0__.default)(lista, () => {\n            botao.classList.remove('ativo');\n            lista.classList.remove('ativo');\n        });\n    }\n    botao.addEventListener('click', openMenu);\n\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/menu-mobile.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n    const modalBox = document.querySelector('[data-modal=\"container\"]');\n    const fechar = document.querySelector('[data-modal=\"fechar\"]');\n    const login = document.querySelector('[data-modal=\"abrir\"]');\n\n    function toggleModal(event) {\n        event.preventDefault();\n        modalBox.classList.toggle('ativo');\n    }\n\n    function clicaFora(event) {\n        if(this === event.target) {\n            toggleModal(event);\n        }\n    }\n    modalBox.addEventListener('click', clicaFora);\n    fechar.addEventListener('click', toggleModal);\n    login.addEventListener('click', toggleModal);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modal.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scrollSuave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollSuave.js */ \"./js/scrollSuave.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.js */ \"./js/accordion.js\");\n/* harmony import */ var _animaScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animaScroll.js */ \"./js/animaScroll.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ \"./js/modal.js\");\n/* harmony import */ var _dropdownMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdownMenu.js */ \"./js/dropdownMenu.js\");\n/* harmony import */ var _menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-mobile.js */ \"./js/menu-mobile.js\");\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/anima-numeros.js\");\n\n\n\n\n\n\n\n\n\nconst scrollSuave = new _scrollSuave_js__WEBPACK_IMPORTED_MODULE_0__.default('a[href^=\"#\"]');\nscrollSuave.init();\n\nconst accordion = new _accordion_js__WEBPACK_IMPORTED_MODULE_2__.default('[data-anime=\"accordion\"] dt');\naccordion.init();\n\n\n(0,_main_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_animaScroll_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_7__.default)();\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ }),

/***/ "./js/scrollSuave.js":
/*!***************************!*\
  !*** ./js/scrollSuave.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n    constructor(links, options) {\n        this.linksInternos = document.querySelectorAll(links);\n        if (options === undefined) {\n            this.options = { behavior: \"smooth\", block: \"start\"}\n        }else {\n            this.options = options;\n        }\n        this.scrollSuave = this.scrollSuave.bind(this);\n    }\n\n    scrollSuave(event) {\n        event.preventDefault();\n        const href = event.target.getAttribute(\"href\");\n        const select = document.querySelector(href);\n        select.scrollIntoView(this.options);\n    }\n\n    addLinkEvent() {\n        this.linksInternos.forEach((link) => {\n            link.addEventListener('click', this.scrollSuave);\n        });\n    }\n\n    init() {\n        if (this.linksInternos.length) {\n            this.addLinkEvent();\n        }\n        return this;\n    }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/scrollSuave.js?");

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