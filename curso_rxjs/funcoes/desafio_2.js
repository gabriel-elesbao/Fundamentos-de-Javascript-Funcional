// desafio reduce+map+filter

const carrinho = [
    {nome: 'Caneta',qtde:10, preco: 7.99, fragil: true},
    {nome: 'Impressora',qtde:1, preco: 649.50, fragil: true},
    {nome: 'Caderno',qtde:4, preco: 27.10, fragil: false},
    {nome: 'Lapis',qtde:3, preco:5.82, fragil: false},
    {nome: 'Tesoura',qtde:1, preco: 19.20, fragil: true},
    
]

//1. Apenas os elementos com fragil = true
//2. somar quantidade * preço -> total
//3. Gerar média totais de cada objeto




const getTotal = elemento => elemento.qtde * elemento.preco
const getSoma = (acc, elemento) => acc+elemento

//1
const FilterByFragility = elemento => elemento.fragil ? elemento.nome : null
console.log( carrinho
                .filter(FilterByFragility)
                .map(getTotal)
                
)

//2
console.log(
    carrinho.map(getTotal)
            .reduce(getSoma)
    )

 //3 
 const media = () => carrinho
    .filter(FilterByFragility)
    .map(getTotal)
    .reduce(getSoma)/carrinho.length

 console.log(media())


 // resolução da aula

  const fragil = item => item.fragil
  const getTotal2 = item => item.qtde*item.preco
  const getMedia2 = (acc, el)=>{
    const novaQtde = acc.qtde+1 
    const novoTotal=  acc.total+el
    return {
        qtde: novaQtde,
        total: novoTotal,
        media:  novoTotal/novaQtde
    }
}

const mediaInicial = {qtde: 0, total: 0, media: 0}

const media2 = carrinho
    .filter(fragil)
    .map(getTotal)
    .reduce(getMedia2, mediaInicial)
  
    console.log(media2)