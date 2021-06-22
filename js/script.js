import ScrollSuave from "./scrollSuave.js";
import initMain from "./main.js";
import Accordion from "./accordion.js";
import initAnimaScroll from "./animaScroll.js";
import initModal from "./modal.js";
import initDropDown from "./dropdownMenu.js";
import initMenuMobile from "./menu-mobile.js";
import initAnimaNumeros from "./anima-numeros.js";

const scrollSuave = new ScrollSuave('a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();


initMain();
initAnimaScroll();
initModal();
initDropDown();
initMenuMobile();
initAnimaNumeros();