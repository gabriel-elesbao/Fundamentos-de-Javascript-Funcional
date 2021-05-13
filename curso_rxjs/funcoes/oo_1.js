
//Função construtora 
function Produto(nome, preco, desconto = 0.15){
    this.nome = nome,
    this.preco = preco
    this.desconto = desconto

    this.precoFinal = () => this.preco * (1 - this.desconto)
}

const produto1 = new Produto('Caneta',8.59)
console.log(`Produto: ${produto1.nome} \nPreço: R$${produto1.preco}`)
console.log(`Preço final: R$${produto1.precoFinal()}`)

const produto2 = new Produto('Geladeira',2345.98)
