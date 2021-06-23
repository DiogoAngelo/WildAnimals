export default class Modal {
    constructor(modalBox, close, open) {
        this.modalBox = document.querySelector(modalBox);
        this.fechar = document.querySelector(close);
        this.login = document.querySelector(open);
        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.clicaFora = this.clicaFora.bind(this)
    }

    toggleModal() {
        this.modalBox.classList.toggle('ativo');
    }

    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal()
    }

    clicaFora(event) {
        if(event.target === this.modalBox) {
            this.toggleModal(event);
        }
    }

    addEventModal() {
        this.modalBox.addEventListener('click',this.clicaFora);
        this.fechar.addEventListener('click', this.eventToggleModal);
        this.login.addEventListener('click', this.eventToggleModal);
    }

    init() {
        if (this.modalBox && this.fechar && this.login) {
            this.addEventModal();
        }
        return this;
    }
}