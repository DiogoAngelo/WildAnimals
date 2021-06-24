import outsideClick from "./click-outside.js";

export default class DropDown {
    constructor(link) {
        this.menu = document.querySelector(link);
        this.openDropDown = this.openDropDown.bind(this);

    }

    openDropDown(event) {
        event.preventDefault();
        event.target.classList.add('ativo');
        outsideClick(this, () => {
            console.log(this);
            event.target.classList.remove('ativo');
        });
    }

    addEvent() {
        this.menu.addEventListener('click', this.openDropDown);
    }

    init() {
        this.addEvent();
        return this;
    }
}