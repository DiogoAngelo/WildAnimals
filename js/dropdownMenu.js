export default function initDropDown() {
    const menu = document.querySelector("[data-dropdown]");

    menu.addEventListener('click', openDropDown);

    function openDropDown(event) {
        event.preventDefault();
        this.classList.add('ativo');
        outsideClick(this, () => {
            this.classList.remove('ativo');
        });
    }
    function outsideClick(element, callback) {
        const html = document.documentElement;

        if(!element.hasAttribute('data-outside')) {
            html.addEventListener('click', handleOutsideClick);
        }
        element.setAttribute('data-outside', ' ');

        function handleOutsideClick(event) {
            if(!element.contains(event.target)) {
                html.removeEventListener('click', handleOutsideClick);
                element.removeAttribute('data-outside');

                callback();
            }
        }
    }
}