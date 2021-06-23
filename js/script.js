import ScrollSuave from "./scrollSuave.js";
import TabNav from "./tabNav.js";
import Accordion from "./accordion.js";
import initAnimaScroll from "./animaScroll.js";
import Modal from "./modal.js";
import Tooltip from "./toolTip.js";
import initDropDown from "./dropdownMenu.js";
import initMenuMobile from "./menu-mobile.js";
import AnimaNumeros from "./anima-numeros.js";

const scrollSuave = new ScrollSuave('a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="lista"] li', '[data-tab="content"] section')
tabNav.init();

const modal = new Modal('[data-modal="container"]','[data-modal="fechar"]', '[data-modal="abrir"]')
modal.init();

const toolTip = new Tooltip('[data-tooltip')
toolTip.init();

const animaNumeros = new AnimaNumeros('[data-numero]', 'ativo', '.numeros');
animaNumeros.init();

initAnimaScroll();
initDropDown();
initMenuMobile();
