import outterClick from "./click-outside.js";

export default function initMenuMobile() {
  const botao = document.querySelector("button");
  const menu = document.querySelector('[data-menu="list');
  
  function showMenu() {
    menu.classList.toggle("ativo");
    botao.classList.toggle("ativo");
    
    outterClick(menu, ["click", "touchstart"], () => {
      menu.classList.remove("ativo");
      botao.classList.remove("ativo");
    });
  }

  botao.addEventListener("click", showMenu);
}
