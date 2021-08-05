function funcionarOuNão(valor,chanceErro) {
    return new Promise((resolve,reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
        
    })
}

funcionarOuNão('Testando...',0.4)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.:${err}`))//A segunda função de um .then é pra tratamento específico
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))//Depois de u catch os valores não são mais repassados


     //O problema pode acontecer em qualquer lugar,mas ele sempre vai apontar pro catch
    
    //Se eu coloco um tratamento específico no meu then, o cacth não é mais chamado