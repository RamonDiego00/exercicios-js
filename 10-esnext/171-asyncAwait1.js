function esperarPor(tempo = 2000){
    return new Promise(function(resolve) {
        setTimeout(() =>  resolve(),tempo)
    })
}

esperarPor(2000)
    .then(() => console.log('Executando promisse 1..'))
    .then(esperarPor)
    .then(() => console.log('Executando promisse 2..'))
    .then(esperarPor)
    .then(() => console.log('Executando promisse 3..'))
    .then(esperarPor)
    //eu vou ficar esperando e emitindo varias vezez

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10),5000)
    })
}

async function executar() {
    let valor = await retornarValor()

   await esperarPor(1500)
   console.log(`Async/Await 1 ${valor}...`)

   await esperarPor(1500)
   console.log(`Async/Await 2 ${valor + 1}...`)

   await esperarPor(1500)
   console.log(`Async/Await 3 ${valor + 2}...`)

   return valor + 3
}

async function executarDeVerdade() {
  const resp = await  executar()
  console.log(resp)
}

executarDeVerdade()

//na função async o return é um resolve porem explícito