export default function initScrollSuave() {
    const menuLinks = document.querySelectorAll('[data-menu="list"] li');

    function suave(event) {
        event.preventDefault();
        const menuLink = event.target;
        console.log(menuLink)
    }

    menuLinks.forEach((link) => { 
        link.addEventListener('click', suave);
    });

}

