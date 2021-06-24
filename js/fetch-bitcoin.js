export default class FetchBitcoin {
    constructor(fetchApi, selection) {
        this.fetchApi = fetch(fetchApi);
        this.selection = document.querySelector(selection)
    }

    async obterApi() {
       const response = await this.fetchApi;
       const texto = await response.json();
       this.valor = (1000 / texto.BRL.sell).toFixed(4);
       this.addValue();
    }

    addValue() {
        this.selection.innerText = this.valor
    }

    init() {
        this.obterApi();
        return this;
    }
}