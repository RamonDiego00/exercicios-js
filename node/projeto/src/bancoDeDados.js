const sequence = {
    _id: 1,
    get id() {return this._id++}
}
// vai sempre retornr o próximo valor de id

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}//se o produto já estver setado ele substitui ou adiciona um novo  


function getProduto(id) {
    return produtos[id] || {}
}//caso o id esteja indefio ele retorna um objeto vazio


function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}// vai deletar e retornar o valor em branco

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}

