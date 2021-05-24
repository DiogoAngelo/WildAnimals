export default function initDropDown() {
    const sobre = document.querySelector('[data-dropdown]');

    function mostraDrop(event) {
        event.preventDefault();
        sobre.classList.add('ativo');
        console.log('primeiro')
    }
    function fechaMenu() {
        setTimeout(() => {
            // console.log('aoisdaoidoasi');
            sobre.classList.remove('ativo')


            
        }, 1000);
    }

    window.addEventListener('click', fechaMenu);
    sobre.addEventListener('click', mostraDrop);

}