const sequencia = {
    _valor:1, // convenção,dizendo que é privado
    get valor() { return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

//essa é só uma forma de eu mostrar o valor de forma incoberta(eu uso o set para mostrar e o get como condição de validação )