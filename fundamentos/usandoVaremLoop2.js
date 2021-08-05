const funcs = []

for(var i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
//chamei ma funcao anonima para o meu array e atravez dele eu editeiela

funcs[2]()//indice do array vulgo variavel 2
funcs[8]()//indice do array vulgo variavel 8
//isso dá erro pq o var não tem escopo de bloco gerando um bag do javascript