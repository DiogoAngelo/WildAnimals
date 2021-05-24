export default function initScrollSuave() {
    const links = document.querySelectorAll('a[href^="#"]');


    function scrollSuave(event) {
        event.preventDefault();
        
        const href = this.getAttribute("href");
        const select = document.querySelector(href);

        select.scrollIntoView({
            behavior: "smooth",
        });
    }
    links.forEach((link) => {
        link.addEventListener('click', scrollSuave);
    });
}