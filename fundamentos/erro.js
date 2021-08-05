function tratarErroELancar(erro) {
    //throw new Error('Este erro já está sendo estudado e resolvido')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome:erro.name,
        msg:erro.message,
        data:new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
    
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)

//o try identifica o erro e o catch "encaminha" o erro enviando para o throw que vai enviar uma nova mensagem

//O finally sempre vai ser executado independente se der erro