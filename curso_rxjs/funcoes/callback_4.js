
const carrinho = [
    {nome: 'Caneta',qtde:10, preco: 7.99},
    {nome: 'Impressora',qtde:0, preco: 649.50},
    {nome: 'Caderno',qtde:4, preco: 27.10},
    {nome: 'Lapis',qtde:3, preco: 5.82},
    {nome: 'Tesoura',qtde:1, preco: 19.20},
]

const qtdeMaiorQueZero  = item => item.qtde > 0
const getName= (ElementName)=>  ElementName.nome

// fazendo nosso proprio filter

Array.prototype.meuFilter = function(fn){
    const NovoArray =[]
    for (let i=0; i< this.length; i++){
        if(fn(this[i], i, this)){
           
           NovoArray.push(this[i]) 
            
        } 
        
    }
    return NovoArray
}

const nomesItemsValido = carrinho.meuFilter(qtdeMaiorQueZero)
console.log(nomesItemsValido)

//utlizando filter
const nomesItemsValido2 = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getName)
console.log(nomesItemsValido2)











