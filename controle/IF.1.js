function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor)// disse que ele é true 
    {console.log('É verdade...' + valor)

    }
}

seForVerdadeEuFalo()//undefined é false
seForVerdadeEuFalo(null)//null é falso
seForVerdadeEuFalo(undefined)//undefined é falso
seForVerdadeEuFalo(NaN)//Not a number é falso
seForVerdadeEuFalo('')//string vazia é falso
seForVerdadeEuFalo(0)//o zero é falso
seForVerdadeEuFalo(-1)//Qualquer número sem ser o zero é verdadeiro
seForVerdadeEuFalo(' ')//true,string
seForVerdadeEuFalo('?')//true,string
seForVerdadeEuFalo([])//true,array
seForVerdadeEuFalo([1, 2])//true,array
seForVerdadeEuFalo({})//true,object