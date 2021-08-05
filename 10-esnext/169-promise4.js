function gerarNumerosEntre (min, max, tempo) {
    if(min > max) { [max,min] = [min, max] }// destructing
    return new Promise(resolve =>{
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)  
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60 , 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)

    ])
}
console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeLog('promise')
        console.timeEnd('promise')
    })

    //esse metodos são para saber o tempo de resposta de uma função assincrona

