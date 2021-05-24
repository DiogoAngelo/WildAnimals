export default function initMain() {
    const imgs = document.querySelectorAll('[data-tab="lista"] li');
    const descripts = document.querySelectorAll('[data-tab="content"] section');

    descripts[0].classList.add('ativo', 'show-right')

    function openDescription(index) {
        descripts.forEach((item) => {
            item.classList.remove('ativo');
        });
        const direcao = descripts[index].dataset.anime;
        descripts[index].classList.add('ativo', direcao);
    }

    imgs.forEach((img, index) => {
        img.addEventListener('click', () => {
            openDescription(index)
        });
    });
}