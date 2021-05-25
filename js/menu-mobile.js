import outsideClick from "./click-outside.js";


export default function initMenuMobile() {

    const botao = document.querySelector('[data-menu="button"]');
    const lista = document.querySelector('[data-menu="list"]');

    botao.addEventListener('click', openMenu);

    function openMenu() {
        this.classList.add('ativo');
        lista.classList.add('ativo');
        outsideClick(lista, () => {
            botao.classList.remove('ativo');
            lista.classList.remove('ativo');

        })
    }
}