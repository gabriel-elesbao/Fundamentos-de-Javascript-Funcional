


const nums=[1,2,3,4,5]
const dobro = (value)=> value*2
const NewArray= nums.map(dobro)
console.log(NewArray)

const names = ['ana', 'bia','rafa', 'diego','roberta']
const primeiraLetra = texto => texto[0]
console.log(names.map(primeiraLetra))


const carrinho = [
    {nome: 'Caneta',qtde:10, preco: 7.99},
    {nome: 'Impressora',qtde:0, preco: 649.50},
    {nome: 'Caderno',qtde:4, preco: 27.10},
    {nome: 'Lapis',qtde:3, preco: 5.82},
    {nome: 'Tesoura',qtde:1, preco: 19.20},
]

const getName= (ElementName)=>  ElementName.nome
const TotalCompras = (total) => `| Produto | ${total.nome} Total: ${total.qtde*total.preco}`


const ArrayNames = carrinho.map(getName)
const ArrayCompras = carrinho.map(TotalCompras)
console.log(ArrayNames)
console.log(ArrayCompras)

// criando nosso própio map
Array.prototype.meuMap = function(fn){
    const NovoArray =[]
    for (let i=0; i< this.length; i++){
        const result = fn(this[i], i, this)
        NovoArray.push(result)
        
    }
    return NovoArray
}

