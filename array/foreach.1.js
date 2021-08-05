const aprovados = ['Agatha', 'Aldo','Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
//dentro da função de aprovados existi um for,isso faz ele percorrer e chamar o nome e depois o indice 

//


aprovados.forEach(nome => console.log(nome) )

//aqui eu coloquei uma função dentro da minha variável e chamei a variável dentro do forEach

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


