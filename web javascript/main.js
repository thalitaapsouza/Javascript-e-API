var pessoas = []; /* Instanciano o Array "[]" na variavel pessoas */
var pessoa = {}; /* Instanciano o Objeto "{}" na variavel pessoa */

var getnome = document.getElementById("nome");
var getemail = document.getElementById("email");
var gettelefone = document.getElementById("numero");


function selecione() {
    pessoa = {nome: getnome.value, email: getemail.value, telefone: gettelefone.value};

    if (pessoas.length < 1) {
        pessoas[0] = pessoa;
    } else pessoas[pessoa.length] = pessoa;

    atualizeTabela(getnome.value, getemail.value, gettelefone.value);
}


function atualizeTabela(nome, email, telefone) {
    var setTabela = document.getElementById("tbody")
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    td1.appendChild(document.createTextNode(nome));
    td2.appendChild(document.createTextNode(email));
    td3.appendChild(document.createTextNode(telefone));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    setTabela.appendChild(tr);
}

function atualizarAPI() {
    pessoas.forEach(function(get) {
        fetch('https://635aedf86f97ae73a639e1b2.mockapi.io/userCadastradas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(get)
        })
    });
}