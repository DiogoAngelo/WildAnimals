import ScrollSuave from "./scrollSuave.js";
import initMain from "./main.js";
import initAccordion from "./accordion.js";
import initAnimaScroll from "./animaScroll.js";
import initModal from "./modal.js";
import initDropDown from "./dropdownMenu.js";
import initMenuMobile from "./menu-mobile.js";
import initAnimaNumeros from "./anima-numeros.js";

const scrollSuave = new ScrollSuave('a[href^="#"]');
scrollSuave.init();

initMain();
initAccordion();
initAnimaScroll();
initModal();
initDropDown();
initMenuMobile();
initAnimaNumeros();