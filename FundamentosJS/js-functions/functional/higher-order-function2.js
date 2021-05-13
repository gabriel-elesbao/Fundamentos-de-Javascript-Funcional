// técnica curring

function finalPrice(tax){
    return function(price){
        return price * (1 + tax).toFixed(2)
    } 
}

const nycFinalPrice = finalPrice(0,0875)

console.log(nycFinalPrice (25.1))
console.log(nycFinalPrice (21.7))
console.log(nycFinalPrice (107.9))

/* Se eu tenho o mesmo imposto aplicado para varios produtos, eu posso fazer da forma acima, armazenar uma função
em uma variavel, e na hora de passar o preço do produto, apenas chamo a variavel e passo somente o preço como parametro */