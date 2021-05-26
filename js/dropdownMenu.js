import outsideClick from "./click-outside.js";

export default function initDropDown() {
    const menu = document.querySelector("[data-dropdown]");

    function openDropDown(event) {
        event.preventDefault();
        this.classList.add('ativo');
        outsideClick(this, () => {
            this.classList.remove('ativo');
        });
    }
    menu.addEventListener('click', openDropDown);
}