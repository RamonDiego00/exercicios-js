function gerarNumerosEntre (min, max) {
    if(min > max) {
        [max,min] = [min, max]
    }

    return new Promise(resolve =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10, 11)
.then(num => num *10)
.then(numX10 => `O número gerado foi o ${numX10}`)
.then(console.log)


// esse meu [max, min] vai receber os valores de [min, max](invertendo as variaveis)
// De um lado u destructing e do outro um array normal