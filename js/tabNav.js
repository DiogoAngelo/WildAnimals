export default class TabNav {
    constructor(img, description) {
        this.imgs = document.querySelectorAll(img);
        this.descripts = document.querySelectorAll(description);
    }

    openDescription(index) {
        this.descripts.forEach((item) => {
            item.classList.remove('ativo');
        });
        const direcao = this.descripts[index].dataset.anime;
        this.descripts[index].classList.add('ativo', direcao);
    }

    addEvent() {
        this.imgs.forEach((img, index) => {
            img.addEventListener('click', () => {
                this.openDescription(index)
            });
        });
    }

    init() {
        if (this.imgs.length && this.descripts.length) {
            this.openDescription(0);
            this.addEvent();
        }
        return this;
    }
}

