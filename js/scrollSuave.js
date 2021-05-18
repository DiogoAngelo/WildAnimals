export default function initScrollSuave() {
  const links = document.querySelectorAll('a[href^="#"]');

  function scrollDown(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const atributo = document.querySelector(href);

    atributo.scrollIntoView({
      behavior: "smooth",
    });
  }
  links.forEach((link) => {
    link.addEventListener("click", scrollDown);
  });
}
initScrollSuave();
