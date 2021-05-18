export default function animaScroll() {
  const sections = document.querySelectorAll('[data-anima="scroll"]');

  const altura = window.innerHeight * 0.6;

  function anima() {
    sections.forEach((section) => {
      const topo = section.getBoundingClientRect().top;
      if (topo <= altura) {
        if(!section.classList.contains('ativo')){
          section.classList.add("ativo");

        }
      }
    });
  }
  window.addEventListener("scroll", anima);

  anima();
}
