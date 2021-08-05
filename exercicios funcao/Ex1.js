function valores(x,y) {
    console.log(x + y)
    console.log(x-y)
    console.log(x *y)
    console.log(x / y)
}

valores(5,7)

// 1 feito

function triangulos(x,y,z) {
    if (x == y && y == z) {
        console.log("Esse é um Triâgulo Equilatero")
    }
    else if (x != y && y != z && z != x){
        console.log("Esse é um Triâgulo Escaleno")
    }
    else {
        console.log("Esse é um Triâgulo Isósceles")
    
    }
}

triangulos(5,5,5);
triangulos(5,5,4);
triangulos(4,5,6);
triangulos(5,5,0);
//Feito 2

function potencial(x,y){
    return console.log(Math.pow(x,y))
} 

potencial(3,4)

// feito 3 

