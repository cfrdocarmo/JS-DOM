const BotaoConclui = () => {
  const botaoConclui = document.createElement('button')
  botaoConclui.classList.add('check-button')
  botaoConclui.innerText = 'concluir'

  botaoConclui.addEventListener('click', concluirTarefa)

  return botaoConclui
}

const concluirTarefa = (evento) => {
  const botaoConclui = evento.target
  const tarefacompleta =botaoConclui.parentElement
  tarefacompleta.classList.toggle('done')
}

export default BotaoConclui