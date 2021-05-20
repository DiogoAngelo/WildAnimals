export default function principal() {
    const imagens = document.querySelectorAll('.animais-lista img');
    const descricao = document.querySelectorAll('.animais-descricao section');

    imagens.forEach((imagem, index) => {
        imagem.addEventListener('click', () => {
            // descricao.length.classList.remove('ativo')
            descricao[index].classList.add('ativo');
        })
    })
}
