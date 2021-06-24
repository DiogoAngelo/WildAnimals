import ScrollSuave from "./scrollSuave.js";
import TabNav from "./tabNav.js";
import Accordion from "./accordion.js";
import AnimaScroll from "./animaScroll.js";
import Modal from "./modal.js";
import Tooltip from "./toolTip.js";
import initDropDown from "./dropdownMenu.js";
import initMenuMobile from "./menu-mobile.js";
import AnimaNumeros from "./anima-numeros.js";
import FetchBitcoin from "./fetch-bitcoin.js";
import DropDown from "./dropdownMenu.js";

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

const fetchBitcoin = new FetchBitcoin('https://www.blockchain.com/ticker', '.btc-preco');
fetchBitcoin.init();

const animaScroll = new AnimaScroll('[data-anima="scroll"]');
animaScroll.init();

const dropDown = new DropDown('[data-dropdown]');
dropDown.init();

initMenuMobile();
