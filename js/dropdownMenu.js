import outterClick from "./click-outside.js";

export default function dropdown() {
  const menus = document.querySelectorAll("[data-dropdown]");

  function openDropDown(event) {
    event.preventDefault();
    this.classList.add("ativo");
  }
  ["click", "touchstart"].forEach((userEvent) => {
    menus.forEach((menu) => {
      menu.addEventListener(userEvent, openDropDown);
    });
  });

}