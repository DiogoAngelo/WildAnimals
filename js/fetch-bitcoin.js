export default function initFetchBitcoin() {

    async function fetchValue() {
        const valorBitcoin = document.querySelector('.btc-preco')
        const bitcoin = await fetch('https://www.blockchain.com/ticker');
        const bitcoinJSON = await bitcoin.json();
        valorBitcoin.innerText = (1000 / bitcoinJSON.BRL.buy).toFixed(4);
    }
    fetchValue();
}
