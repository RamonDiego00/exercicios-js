const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome,indice){
    console.log(`${indice + 1}.${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

//o forEach é uma funçaõ de array,assim como o math para number

//nesse ultimo eu criei uma função na própria chamada do "array"

//Isso vira um loop pq a cada novo elemento no array ele vai chamar essa função e falar o nome e o indice