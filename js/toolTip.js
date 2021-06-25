export default class Tolltip {
    constructor(tooltips) {
        this.tooltips = document.querySelectorAll(tooltips);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseMove(event) {
        this.tooltipBox.style.top = `${event.pageY + 20}px`;
        if (event.pageX + 200 > window.innerWidth) {

            this.tooltipBox.style.left = `${event.pageX - 180}px`;   

        }else {
            this.tooltipBox.style.left = `${event.pageX + 20}px`;   
        }
    }
    
    onMouseLeave(event) {
        this.tooltipBox.remove();
        event.currentTarget.removeEventListener('mouseLEave', this.onMouseLeave);
        event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
    }

    criarToolTipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        this.tooltipBox = tooltipBox;
    }

    onMouseOver(event) {
        this.criarToolTipBox(event.currentTarget);
        event.currentTarget.addEventListener('mousemove', this.onMouseMove);
        event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    }

    addTooltipsEvent() {
        this.tooltips.forEach((item) => {
            item.addEventListener('mouseover', this.onMouseOver);
        });
    }

    init() {
        if (this.tooltips.length) {
            this.addTooltipsEvent();
        }
        return this;
    }
}   
