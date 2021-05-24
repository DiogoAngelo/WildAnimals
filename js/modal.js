export default function initModal() {
    const modalBox = document.querySelector('[data-modal="container"]');
    const fechar = document.querySelector('[data-modal="fechar"]');
    const login = document.querySelector('[data-modal="abrir"]');

    function toggleModal(event) {
        event.preventDefault();
        modalBox.classList.toggle('ativo');
    }

    function clicaFora(event) {
        if(this === event.target) {
            toggleModal(event);
        }
    }
    modalBox.addEventListener('click', clicaFora);
    fechar.addEventListener('click', toggleModal);
    login.addEventListener('click', toggleModal);
}