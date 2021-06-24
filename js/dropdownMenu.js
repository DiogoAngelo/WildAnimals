import outsideClick from "./click-outside.js";

export default class DropDown {
    constructor(link) {
        this.menu = document.querySelector(link);
        this.activeClass = 'ativo'
        this.openDropDown = this.openDropDown.bind(this);
    }

    openDropDown(event) {
        event.preventDefault();
        const element = event.currentTarget;
        element.classList.add(this.activeClass);
        outsideClick(element, () => {
            element.classList.remove(this.activeClass);
        });
    }

    addEvent() {
        this.menu.addEventListener('click', this.openDropDown);
    }

    init() {
        if (this.menu) {
            this.addEvent();
        }
        return this;
    }
}