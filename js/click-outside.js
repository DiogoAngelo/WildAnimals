export default function outsideClick(element, callback) {
    const html = document.documentElement;

    function handleOutsideClick(event) {
        if(!element.contains(event.target)) {
            html.removeEventListener('click', handleOutsideClick);
            element.removeAttribute('data-outside');
            callback();
        }
    }
    if(!element.hasAttribute('data-outside')) {
        setTimeout(() => {
            html.addEventListener('click', handleOutsideClick);
        })
    }
    element.setAttribute('data-outside', ' ');
}