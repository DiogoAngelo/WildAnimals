export default function principal() {
    const imagens = document.querySelectorAll('.animais-lista img');
    const descricao = document.querySelectorAll('.animais-descricao section');

    function mostraDescricao(index) {

        
         descricao[index].classList.add('ativo')

    }

    imagens.forEach((img, index) => {
        img.addEventListener('click', () => {
            mostraDescricao(index);
        });
    })
}
