const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaDados(evento.target.dataset.peca)
    })
})

function manipulaDados (operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
    //console.log(peca)
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaDados (peca) {
    //console.log(pecas[peca])
    estatisticas.forEach ( (elemento) => {
        //console.log(elemento.dataset.estatistica)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

const robotron = document.getElementById("robotron")
const coresRobotron = [
    'file:///C:/Users/Gustavo/Desktop/Alura/robotron-2000-projeto_inicial/img/robotron 2000 - preto/robotron 2000 - preto.png',

    'file:///C:/Users/Gustavo/Desktop/Alura/robotron-2000-projeto_inicial/img/robotron 2000 - amarelo/robotron 2000 - amarelo.png',

    'file:///C:/Users/Gustavo/Desktop/Alura/robotron-2000-projeto_inicial/img/robotron 2000 - azul/robotron 2000 - azul.png',

    'file:///C:/Users/Gustavo/Desktop/Alura/robotron-2000-projeto_inicial/img/robotron 2000 - branco/robotron 2000 - branco.png',

    'file:///C:/Users/Gustavo/Desktop/Alura/robotron-2000-projeto_inicial/img/robotron 2000 - rosa/robotron 2000 - rosa.png',
    
    'file:///C:/Users/Gustavo/Desktop/Alura/robotron-2000-projeto_inicial/img/robotron 2000 - vermelho/robotron 2000 - vermelho.png'
]

let i = -1;
robotron.addEventListener("click", () => {
    if (i >= (coresRobotron.length - 1)){
        i = -1;
    }
    i++;
    robotron.src = coresRobotron[i]})

    