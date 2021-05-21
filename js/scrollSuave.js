export default function initScrollSuave() {

    const menuLinks = document.querySelectorAll('[data-menu="list"] li');

    function suave(event) {
        event.preventDefault();
        const li = event.target.href;
        console.log(li)
    }

    menuLinks.forEach((link) => { 
        link.addEventListener('click', suave);
    });

}

