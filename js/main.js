export default function initMain() {
    const imgs = document.querySelectorAll('[data-tab="lista"] li');
    const sections = document.querySelectorAll('[data-tab="content"] section');

    sections[0].classList.add('ativo', 'show-right');

    function mostraDescricao(index) {

        sections.forEach((section) => {
            section.classList.remove('ativo');
        });

        const direction = sections[index].dataset.anime;
        sections[index].classList.add('ativo', direction);
    }

    imgs.forEach((img, index) => {
        img.addEventListener('click', () => {
            mostraDescricao(index)
        });
    })
}