export default function initAnimaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    function animaNumeros() {
        numeros.forEach(numero => {
            const total = +numero.innerText;
    
            let start = 0;
            const divisor = Math.floor(total / 100);
    
            const timer = setInterval(() => {
                start += divisor;
                numero.innerText = start;
                if(start > total) {
                    numero.innerText = total;
                    clearInterval(timer);
                }
            }, 50 * Math.random());
        });
    }
    function handleMutation(mutation) {
        if(mutation[0].target.classList.contains('ativo')) {
            animaNumeros();
        }
    }
    const observerTarget = document.querySelector('.numeros')

    const observer = new MutationObserver(handleMutation);

    observer.observe(observerTarget, {attributes: true});
}