export default function initToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function criarToolTip(element) {
    const tooltipbox = document.createElement("div");
    tooltipbox.classList.add("tooltip");
    const text = element.getAttribute("aria-label");
    tooltipbox.innerText = text;
    document.body.appendChild(tooltipbox);

    return tooltipbox;
  }
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipbox.style.top = `${event.pageY + 10} px`;
      this.tooltipbox.style.left = `${event.pageX + 10} px`;
    },
  };
  const deleta = {
    handleEvent() {
      this.caixa.remove();
      this.element.removeEventListener("mouseleave", deleta);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function onMouseOver() {
    const tooltipbox = criarToolTip(this);

    onMouseMove.tooltipbox = tooltipbox;
    this.addEventListener("mousemove", onMouseMove);

    deleta.caixa = tooltipbox;
    deleta.element = this;
    this.addEventListener("mouseleave", deleta);
  }
  
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
