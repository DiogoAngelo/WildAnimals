export default function principal() {
    const imagens = document.querySelectorAll('.animais-lista img');
    const descricao = document.querySelectorAll('.animais-descricao section');

    descricao[0].classList.add('show-right');
    descricao[0].classList.add('ativo');

    imagens.forEach((imagem, index) => { 
        imagem.addEventListener('click', () => {
            descricao.forEach((item) => {
                item.classList.remove('ativo')
            })
            const anima = descricao[index].dataset.anime;
            descricao[index].classList.add('ativo', anima);

        })
    })
}
