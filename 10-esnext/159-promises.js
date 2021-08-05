function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}   
//Eu criei ua função que recebe dois parametros e retorna uma promeça,ai quando essa promeç for atendida ele vai ter esse delay de tempo e me mandar a frase

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))//Esse "e" é a "frase"

    //Para eu acessar o resultdo de uma promeça atendida de forma correta eu uso o .then
    //Para eu acessar o resultdo de uma promeça atendida de forma incorreta eu uso o .catch

    //O then é como se fosse um parametro de promise

    //O parametro do meu resolve recebe a frase e a frase é levada ao parametro do .then



    //O resolve só aceita um parametro