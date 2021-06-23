export default class AnimaNumeros {
    constructor(seletor, observerClass, observerTarget) {
        this.numeros = document.querySelectorAll(seletor);
        this.watchChanges = this.watchChanges.bind(this);
        this.animaNumeros = this.animaNumeros.bind(this);
        this.obsercerClass = observerClass;
        this.observerTarget = document.querySelector(observerTarget);

    }

    animaNumeros() {
        this.numeros.forEach((numero) => {
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

    watchChanges(mutation) {
        if(mutation[0].target.classList.contains(this.obsercerClass)) {
            this.animaNumeros();
        }
    }

    initObserver() {
        this.observer = new MutationObserver(this.watchChanges);
        this.observer.observe(this.observerTarget, {attributes: true});
    }

    init() {
        if (this.numeros.length && this.observerTarget) {
            this.initObserver();
        }
        return this;
    }
}