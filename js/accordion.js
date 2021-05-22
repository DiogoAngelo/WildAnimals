export default function initAccordion() {
    const quests = document.querySelectorAll('[data-anime="accordion"] dt');

    quests[0].nextElementSibling.classList.add('ativo');   

    function abreResposta(event) {
        event.target.nextElementSibling.classList.toggle('ativo');
    }

    quests.forEach((quest) => {
        quest.addEventListener('click', abreResposta);
    });
}