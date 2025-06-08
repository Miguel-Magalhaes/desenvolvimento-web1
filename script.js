// Ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById('submitPerfil');
  const audio = document.getElementById('audioClique');

  botao.addEventListener('click', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos campos
    const nome = document.formulario.nome.value.trim();
    const fone = document.formulario.fone.value.trim();
    const email = document.formulario.mail.value.trim();
    const senha = document.formulario.senha.value.trim();

    // Validação simples: verifica se algum campo obrigatório está vazio
    if (nome && fone && email && senha) {
        alert(`Perfil criado com sucesso!!!
            Nome: ${nome}
            Telefone: ${fone}
            E-mail: ${email}`);
            audio.play();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
  });
});
