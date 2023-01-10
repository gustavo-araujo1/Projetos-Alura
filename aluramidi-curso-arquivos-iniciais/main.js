function tocaSom (seletorAudio) { //busca elemento audio no html, que precisa de parametro para dar play.

    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // busca todos elementos html com a classe '.tecla'

const listaDeTeste = document.querySelectorAll('.tecla');

listaDeTeste.forEach ( (item, indice) => {
    console.log(item, indice);
})


//"enquanto" o valor for verdadeiro a rotina sera rodada
for (let contador= 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]; // cada tecla recebe um valor de 0 a 8 (indice)
    const instrumento = tecla.classList[1]; // seleciona a segunda classe da classe '.tecla'
    const idAudio = `#som_${instrumento}`; //template string , adiciona "#som_" para a segunda classe da listaDeTeclas

    tecla.onclick = function () { // ao clicar toca o som 
        tocaSom(idAudio); //toca o som puxando cada elemento html com a const idAudio
    }

    tecla.onkeydown = function (evento) {
        console.log(evento.code)
        if (evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup  = function () {
        tecla.classList.remove('ativa');
    }

}

