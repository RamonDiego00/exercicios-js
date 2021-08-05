const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if(x == 5){ 
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if(y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}

//o continue faz praticamente a mesma função,porem o coninue pula o indice do array ou do object

//eu posso criar um rotulo para o for externo para que o break funcione nele 