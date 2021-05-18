export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  const data = new Date();

  const hoje = data.getDay();
  const horaAgora = data.getHours();

  const aberturaDias = funcionamento.dataset.semana.split(",").map(Number);
  const aberturaHorario = funcionamento.dataset.horario.split(",").map(Number);

  if (
    aberturaDias.indexOf(hoje) !== -1 &&
    horaAgora > aberturaHorario[0] &&
    horaAgora < aberturaHorario[1]
  ) {
    funcionamento.classList.add("aberto");
  }
}
