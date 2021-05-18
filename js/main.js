export default function initTabNav() {
  const animaisImg = document.querySelectorAll('[data-tab="lista"] li');
  const animaisDesc = document.querySelectorAll('[data-tab="content"] section');

  function exibe(index) {
    animaisDesc.forEach((item) => {
      item.classList.remove("ativo");
    });
    const direcao = animaisDesc[index].dataset.anime;
    animaisDesc[index].classList.add("ativo", direcao);
  }
  if (animaisImg.length && animaisDesc.length) {
    animaisDesc[0].classList.add("ativo", "show-right");

    animaisImg.forEach((img, index) => {
      img.addEventListener("click", () =>{
        exibe(index);
      });
    });
  }
}
