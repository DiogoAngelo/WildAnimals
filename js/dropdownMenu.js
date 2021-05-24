export default function initDropDown() {
    const sobre = document.querySelector('[data-dropdown]');

    function mostraDrop(event) {
        event.preventDefault();
        sobre.classList.add('ativo')

    }

    sobre.addEventListener('click', mostraDrop);

}