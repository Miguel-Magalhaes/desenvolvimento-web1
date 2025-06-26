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