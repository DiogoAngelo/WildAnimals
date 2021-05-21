export default function initAnimaScroll() {
    const blocos = document.querySelectorAll('[data-anima="scroll"]');

    const alturaTela = window.innerHeight * .6;

    blocos[0].classList.add('ativo');

    function mostraBloco() {
        blocos.forEach((bloco) => {
            const altura = bloco.getBoundingClientRect().top;

            if(altura < alturaTela) {
                if(!bloco.classList.contains('ativo')){
                    bloco.classList.add('ativo');
                }
            }
        });
    }
    window.addEventListener('scroll', mostraBloco);
}