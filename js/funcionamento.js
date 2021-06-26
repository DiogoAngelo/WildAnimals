export default class Funcionamento {
    constructor() {
        this.funcionamento = document.querySelector('[data-semana]');
        this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
        this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
        this.dataAgora = new Date();
        this.diaAgora = this.dataAgora.getDay();
        this.horarioAgora = this.dataAgora.getHours();
        this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
        this.horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);
    }

    addClass() {
        if (this.semanaAberto && this.horarioAberto) {
            this.funcionamento.classList.add('aberto');
        }
    }

    init() {
        this.addClass();
        return this;
    }
}