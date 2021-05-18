export default function initAccordion() {
  const dt = document.querySelectorAll('[data-anime="accordion"] dt');
  const dd = document.querySelectorAll('[data-anime="accordion"] dd');

  dd[0].classList.add("ativo");

  function mostra() {
    this.nextElementSibling.classList.toggle("ativo");
  }
  dt.forEach((item) => {
    item.addEventListener("click", mostra);
  });
}
