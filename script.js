document.addEventListener('DOMContentLoaded', function() {
    const tabelaCorpo = document.getElementById('tabela-corpo');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'tabela.json', true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);

            tabelaCorpo.innerHTML = ''; 

            data.forEach(function(item) {
                const row = document.createElement('tr'); 

                const lojaCell = document.createElement('td');
                lojaCell.textContent = item.loja;
                row.appendChild(lojaCell); 

                const emailCell = document.createElement('td');
                emailCell.textContent = item.email;
                row.appendChild(emailCell); 

                const telefoneCell = document.createElement('td');
                telefoneCell.textContent = item.telefone;
                row.appendChild(telefoneCell); 

                tabelaCorpo.appendChild(row); 
            });
        } else {
            console.error('Erro ao carregar os dados da tabela:', xhr.status, xhr.statusText);
            tabelaCorpo.innerHTML = '<tr><td colspan="3">Erro ao carregar os dados.</td></tr>';
        }
    };

    xhr.onerror = function() {
        console.error('Erro de rede ao tentar carregar tabela.json');
        tabelaCorpo.innerHTML = '<tr><td colspan="3">Erro de conexão.</td></tr>';
    };

    xhr.send();
});


document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById('submitPerfil');
  const audio = document.getElementById('audioClique');

  botao.addEventListener('click', function (event) {
    event.preventDefault();

    const nome = document.formulario.nome.value.trim();
    const fone = document.formulario.fone.value.trim();
    const email = document.formulario.mail.value.trim();
    const senha = document.formulario.senha.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const foneRegex = /^\(\d{2}\) 9\d{4}-\d{4}$/;

    if (!nome) {
      alert("Por favor, preencha o nome.");
      return;
    }

    if (!fone) {
      alert("Por favor, preencha o telefone.");
      return;
    }

    if (!foneRegex.test(fone)) {
      alert("Por favor, insira o telefone no formato correto: (XX) 9XXXX-XXXX");
      return;
    }

    if (!email) {
      alert("Por favor, preencha o e-mail.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    if (!senha) {
      alert("Por favor, preencha a senha.");
      return;
    }

    if (senha.length < 8) {
      alert("A senha deve conter pelo menos 8 caracteres.");
      return;
    }

    alert(`Perfil criado com sucesso!!!\n
Nome: ${nome}
Telefone: ${fone}
E-mail: ${email}`);
    audio.play();
  });
});

