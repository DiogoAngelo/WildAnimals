export default function initModal() {
    const modalBox = document.querySelector('[data-modal="container"]');
    const fechar = document.querySelector('[data-modal="fechar"]');
    const login = document.querySelector('[data-modal="abrir"]');

    function abreModal(event) {
        event.preventDefault();
        modalBox.classList.add('ativo');
    }
    function fechaModal() {
        modalBox.classList.remove('ativo');
    }
    function clicaFora(event) {
        if(this === event.target) {
            fechaModal();
        }
    }

    modalBox.addEventListener('click', clicaFora);
    fechar.addEventListener('click', fechaModal);
    login.addEventListener('click', abreModal);
}