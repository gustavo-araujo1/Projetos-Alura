async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro) {
            throw Error('CEP Inexistente!')
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf
        bairro.value = consultaCEPConvertida

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = "<p>CEP inválido!</p>";
        console.log(erro)
    }
    console.log(cep)
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value));

//let ceps = ['01001000', '01001001'];
//let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
//console.log(conjuntoCeps)
//Promise.all(conjuntoCeps).then(resposta => console.log(resposta));
