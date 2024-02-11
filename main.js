const form = document.getElementById('form-atividade');
const Nome = [];
const DDD = [];
const Numero = [];
const separadorNumero = '-';

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
});

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById('nome');
    const inputDddAtividade = document.getElementById('ddd');
    const inputNumeroAtividade = document.getElementById('numero');


    if (Numero.includes(inputNumeroAtividade.value)) {
        alert(`O número: ${inputNumeroAtividade.value} já foi inserido`);
    } else {

    Nome.push(inputNomeAtividade.value);
    DDD.push(inputDddAtividade.value);
    Numero.push(inputNumeroAtividade.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputDddAtividade.value}</td>`;
    linha += `<td>${inputNumeroAtividade.value.slice(0,3)}-${inputNumeroAtividade.value.slice(3,6)}-${inputNumeroAtividade.value.slice(6)}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputDddAtividade.value = '';
    inputNumeroAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
