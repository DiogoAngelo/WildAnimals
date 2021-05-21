export default function initAccordion() {
    const questions = document.querySelectorAll('.faq-lista dt');
    questions[0].nextElementSibling.classList.add('ativo');

    function showAnswer(event) {
        event.target.nextElementSibling.classList.toggle('ativo');
    }

    questions.forEach((question) => {
        question.addEventListener('click', showAnswer);
    })
}