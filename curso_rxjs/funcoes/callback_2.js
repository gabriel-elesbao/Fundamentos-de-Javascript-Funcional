const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err, dados){
  console.log(dados.toString())
} 

fs.readFile(caminho, {}, exibirConteudo)


// const numbers =[gabriel, ana, julia, roberta]

// newArray =  numbers.map((elemento)=>elemento.indexOf(1))

// console.log(newArray)
 
// console.log(numbers)
