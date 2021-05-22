export default function initScrollSuave() {
    const menuLinks = document.querySelectorAll('[data-menu="list"] li');

    function suave(event) {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        const select = document.querySelector(href)
        
        select.scrollIntoView {
            behavior: {
                smooth,
            }
        }
        
    }

    menuLinks.forEach((link) => { 
        link.addEventListener('click', suave);
    });

}

