export default function initAccordion() {
    const questions = document.querySelectorAll('[data-anime="accordion"] dt');
    const answers = document.querySelectorAll('[data-anime="accordion"] dd');

    answers[0].classList.add('ativo')
    function showAnswer(event) {
        event.target.nextElementSibling.classList.toggle('ativo');
    }

    questions.forEach((question) => {
        question.addEventListener('click', showAnswer);
    });
}