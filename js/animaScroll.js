export default class AnimaScroll {
    constructor(bloco) {
        this.blocos = document.querySelectorAll(bloco);
        this.alturaTela = window.innerHeight * .6;
        this.mostraBloco = this.mostraBloco.bind(this);
    }

    mostraBloco() {
        this.blocos.forEach((bloco) => {
            const altura = bloco.getBoundingClientRect().top;
            if(altura <= this.alturaTela) {
                if(!bloco.classList.contains('ativo')) {
                    bloco.classList.add('ativo');
                }
            }
        });
    }

    adicionaEvento() {
        window.addEventListener('scroll', this.mostraBloco);
    }

    init() {
        this.blocos[0].classList.add('ativo');
        this.adicionaEvento();
    }
}