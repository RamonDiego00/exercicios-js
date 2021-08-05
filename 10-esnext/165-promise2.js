/*setTimeout(function() {
    console.log('Executando callbabk...')

    setTimeout(function() {
    console.log('Executando callbabk...')
        setTimeout(function() {
        console.log('Executando callbabk...')
    
        },2000)
    },2000)  
}, 2000)*/


//2000 milesegundos == 2 segundos

function esperarPor(tempo = 2000){
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promisse...')
            resolve('Vish')
        },tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor())
    //eu vou ficar esperando e emitindo varias vezez
