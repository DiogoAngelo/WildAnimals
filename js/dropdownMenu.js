<<<<<<< HEAD
import outsideClick from "./click-outside.js";

export default function initDropDown() {
    const menu = document.querySelector("[data-dropdown]");

    function openDropDown(event) {
        event.preventDefault();
        this.classList.add('ativo');
        outsideClick(this, () => {
            this.classList.remove('ativo');
        });
    }
    menu.addEventListener('click', openDropDown);
=======
import outterClick from "./click-outside.js";

export default function dropdown() {
  const menus = document.querySelectorAll("[data-dropdown]");

  function openDropDown(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outterClick(this, ["click", "touchstart"], () => {
        this.classList.remove("ativo");
      });
  }
  ["click", "touchstart"].forEach((userEvent) => {
    menus.forEach((menu) => {
      menu.addEventListener(userEvent, openDropDown);
    });
  });

>>>>>>> master
}