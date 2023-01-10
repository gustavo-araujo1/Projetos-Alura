function calcularValorTotalDeLivros(livros) {
    return livros.reduce((acc, livros) => acc + livros.preco, 0).toFixed(2)
}