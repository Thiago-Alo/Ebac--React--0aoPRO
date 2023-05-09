const formulario = document.querySelector('#formulario');
const botaoSubmit = document.querySelector('#botao-submit');
const tabelaRespostas = document.querySelector('#tabela-respostas');
const loading = document.querySelector('#loading');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  // exibir o fake loading
  loading.style.display = 'block';
  
  // simular um delay de 3 segundos
  setTimeout(function() {
    // ocultar o fake loading
    loading.style.display = 'none';

    // criar uma nova linha na tabela com as respostas do formulário
    const linha = tabelaRespostas.insertRow();
    const colunaNome = linha.insertCell();
    const colunaEmail = linha.insertCell();
    const colunaIdade = linha.insertCell();
    const colunaSexo = linha.insertCell();
    const colunaInteresses = linha.insertCell();
    const colunaProgramacao = linha.insertCell();

    colunaNome.innerHTML = formulario.elements.nome.value;
    colunaEmail.innerHTML = formulario.elements.email.value;
    colunaIdade.innerHTML = formulario.elements.idade.value;
    colunaSexo.innerHTML = formulario.elements.sexo.value;
    colunaInteresses.innerHTML = "";
    if (formulario.elements.interesse1.checked) {
      colunaInteresses.innerHTML += "Música ";
    }
    if (formulario.elements.interesse2.checked) {
      colunaInteresses.innerHTML += "Esporte ";
    }
    if (formulario.elements.interesse3.checked) {
      colunaInteresses.innerHTML += "Cinema ";
    }
    colunaProgramacao.innerHTML = formulario.elements.programacao.value;

    // exibir a tabela de respostas
    tabelaRespostas.style.display = 'table';

    // resetar o formulário
    formulario.reset();
  }, 3000);
});
