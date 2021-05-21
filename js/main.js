export default function principal() {
    const imagens = document.querySelectorAll('.animais-lista img');
    const descricao = document.querySelectorAll('.animais-descricao section');

    descricao[0].classList.add('ativo', 'show-right');

    function mostraDescricao(index) {
        descricao.forEach((item) => {
            item.classList.remove('ativo');
        });
        const data = descricao[index].dataset.anime;
        descricao[index].classList.add('ativo', data);
    }
    imagens.forEach((img, index) => {
        img.addEventListener('click', () => {
            mostraDescricao(index);
        });
    })
}
