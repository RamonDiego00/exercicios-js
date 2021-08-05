Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {     
        if(callback(this[i], i, this)== true)  {
            newArray.push(this[i])
        }
    } 
    return newArray
}
//vai adicioar um novo elemento caso ele seja true nesse meu new array

const produtos = [
    {nome: 'Notebook',preco: 2499, fragil:true},
    {nome: 'iPad Pro',preco: 4199, fragil:true},
    {nome: 'Copo de Vidro',preco: 12.49, fragil:true},
    {nome: 'Copo de Plástico',preco: 18.99, fragil:false},
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
// o filter já faz esse teste de true e false então eu não preciso usar o == (true o false)

console.log(produtos.filter2(caro).filter2(fragil))