Array.prototype.forEach2 = function(callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}
// o this[1] se refere ao valor atual, o i é o indice , e o this é o array completo


const aprovados = ['Agatha', 'Aldo','Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})