export default function outsideClick(element, callback) {
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