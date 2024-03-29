import ScrollSuave from "./scrollSuave.js";
import TabNav from "./tabNav.js";
import Accordion from "./accordion.js";
import AnimaScroll from "./animaScroll.js";
import Modal from "./modal.js";
import Tooltip from "./toolTip.js";
import AnimaNumeros from "./anima-numeros.js";
import FetchBitcoin from "./fetch-bitcoin.js";
import DropDown from "./dropdownMenu.js";
import MenuMobile from "./menu-mobile.js";
import Funcionamento from "./funcionamento.js";
import  SlideNav from "./slide.js";

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

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();

slide.addControl('.custom-controls');
