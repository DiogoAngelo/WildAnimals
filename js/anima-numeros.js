export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero");
  function animaNumeros() {
    numeros.forEach((n) => {
      const numero = +n.innerText;
      const divisor = Math.floor(numero / 100);

      let i = 0;
      const counter = setInterval(() => {
        i += divisor;
        n.innerText = i;

        if (i > numero) {
          n.innerText = numero;
          clearInterval(counter);
        }
      }, Math.random() * 50);
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      animaNumeros();
    }
  }
  const target = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(target, { attributes: true });
}
