const botaoMostra = document.querySelector("[botaoDeMostrar]");

botaoMostra.addEventListener("click", (evento) => {
    
    mostra(evento.target.textContent);

})

function mostra (operaçao) {
    const lista = document.querySelector("[lista]");

    lista.classList.toggle('lista-ativa');
    botaoMostra.innerText = 'Esconder cores'

    if(operaçao === "Esconder cores") {
        botaoMostra.innerText = "Aluratintas em estoque:"
    }
}
