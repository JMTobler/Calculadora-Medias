const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji Celebrando"';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji Decepcionado"';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const atividades = [];
const notas = [];
const notaMinima = parseFloat(prompt("Digite a nota minima!"));

let linhas = '';

function addLinha() {
    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(nomeAtividade.value)) {
        alert(`A atividade ${nomeAtividade.value} já foi inserida!`)
    } else {
        atividades.push(nomeAtividade.value);
        notas.push(parseFloat(notaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }


    nomeAtividade.value = '';
    notaAtividade.value = '';
}

function attTabela() {
    const corpoTabela = document.querySelector('tbody');

    corpoTabela.innerHTML = linhas;
}

function attMedia() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaNotas = 0;

    for(let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    attTabela();
    attMedia();
});

