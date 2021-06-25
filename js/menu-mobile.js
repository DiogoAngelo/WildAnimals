import outsideClick from "./click-outside.js";

export default class MenuMobile {
    constructor(botao, lista) {
        this.botao = document.querySelector(botao);
        this.lista = document.querySelector(lista);
        this.openMenu = this.openMenu.bind(this);

    }

    openMenu() {
        this.botao.classList.add('ativo');
        this.lista.classList.add('ativo');
        outsideClick(this.lista, () => {
            this.botao.classList.remove('ativo');
            this.lista.classList.remove('ativo');
        });
    }

    addEvent() {
        this.botao.addEventListener('click', this.openMenu);
    }

    init() {
        if (this.botao && this.lista) {
            this.addEvent();
        }
        return this;
    }
}