export default function initScrollSuave() {
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    function scrola(event) {
        const href = event.target.getAttribute('href');
        const link = document.querySelector(href);

        link.scrollIntoView({
            behavior: "smooth",
        });
    }
    menuLinks.forEach((link) => {
        link.addEventListener('click', scrola);
    });
}

