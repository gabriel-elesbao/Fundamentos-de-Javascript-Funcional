function Produto(nome, preco, desconto = 0.5){
    this.nome = nome,
    this.preco = preco
    this._desconto = desconto

    this.precoFinal = () => this.preco * (1 - this._desconto)
}


Produto.prototype.log = function(){
    console.log(`Nome: ${this.nome} Preço: R$${this.preco}`)
}


Object.defineProperty(Produto.prototype, 'desc',{
    get: function(){
        return this._desconto
    },

    set: function(novoDesc){
        if(novoDesc >= 0 && novoDesc <=1){
            this._desconto = novoDesc
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString',{
    get: function(){
        return `${this._desconto*100}% de desconto`
    }
    
})


// const produto1 = new Produto('Caneta',8.59)
// console.log(`Produto: ${produto1.nome} \nPreço: R$${produto1.preco}`)
// console.log(`Preço final: R$${produto1.precoFinal()}`)

// produto1.log()


const produto2 = new Produto('Geladeira',3000) 

console.log(produto2.preco)
console.log(produto2.precoFinal())
produto2.desc = 4
console.log(produto2.desc)
console.log(produto2.descString)

