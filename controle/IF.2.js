function teste1(num) {
    if(num > 7)
        console.log(num)// só ele tá associado ao if,logo só ele vai ser execuado
        
    console.log('Final')  

}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com o ;, não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)

//por conta do ponto e virgula o if não esta associado ao console.log, logo, ele é um conjunto vazio