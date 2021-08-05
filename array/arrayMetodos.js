const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()// massa quebrou o carro!

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona em primeiro
console.log(pilotos) 

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.slice(3, 1) // massa quebrou :(
    console.log(pilotos)

    const algunsPilotos1 = pilotos.slice(2) // novo array
    console.log(algunsPilotos1)

    const algunsPilotos2 = pilotos.slice(1, 4)// o 4 fica de fora desse novo array
    console.log(algunsPilotos2)