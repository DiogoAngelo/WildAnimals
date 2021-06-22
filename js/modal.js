export default class Modal {
    constructor(modalBox, close, open) {
        this.modalBox = document.querySelector(modalBox);
        this.fechar = document.querySelector(close);
        this.login = document.querySelector(open);
    }

    toggleModal(event) {
        event.preventDefault();
        this.modalBox.classList.toggle('ativo');
    }

    clicaFora(event) {
        if(this === event.target) {
            this.toggleModal(event);
        }
    }

    addEventModal() {
        this.modalBox.addEventListener('click', (event) => this.clicaFora(event));
        this.fechar.addEventListener('click', (event) =>  this.toggleModal(event));
        this.login.addEventListener('click', (event) => this.toggleModal(event));
    }

    init() {
        this.addEventModal();
    }
}