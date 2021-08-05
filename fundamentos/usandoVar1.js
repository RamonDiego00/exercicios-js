{
    {
            {
                {
                    var sera = 'será????'//visivel dentro do escopo 
                    console.log(sera)
                }
            }
    }

}

console.log(sera)//tbm visivel fora do escopo

function teste() {
    var local = 123 
    console.log(local)//só é visivel dentro do bloco function
}

teste()
console.log(local)//não visível fora do escopo
