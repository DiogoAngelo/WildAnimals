export default function initAnimaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    function animaNumeros() {
        numeros.forEach((numero) => {
            const total = +numero.innerText;
            const divisor = Math.floor(total / 100);
    
            let start = 0
            const counter = setInterval(() => {
                start += divisor;
                numero.innerText = start;
                if(start > total) {
                    clearInterval(counter);
                }
            }, 50 * Math.random());
        });
    }

    function watchChanges(mutation) {
        if(mutation[0].target.classList.contains('ativo')) {
            animaNumeros();
        }
    }

    const observer = new MutationObserver(watchChanges);
    const target = document.querySelector('.numeros');

    observer.observe(target, {attributes: true});
}