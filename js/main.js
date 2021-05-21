export default function principal() {
    const imagens = document.querySelectorAll('.animais-lista img');
    const descricao = document.querySelectorAll('.animais-descricao section');

    descricao[0].classList.add('ativo', 'show-right')

    function openDescription(index) {

        descricao.forEach((item) => {
            item.classList.remove('ativo');
        })

        const direcao = descricao[index].dataset.anime;
        descricao[index].classList.add('ativo', direcao);
    }
    imagens.forEach((img, index) => {
        img.addEventListener('click', () => {
            openDescription(index);
        });
    });
}
