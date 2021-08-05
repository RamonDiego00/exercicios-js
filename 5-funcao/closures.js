//Closure é o escopo criado quando uma função é criada
//Esse scopo permite a função acessar e manipular variáveis externas a função

// Contexto lexico em ação!!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x 
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

//Isso é uma memória do escopo que ela realmente pertence