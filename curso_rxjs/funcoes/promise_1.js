const primeiroElemento = ArrayOuString => ArrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

const p = new Promise(function(resolve){
    resolve(['Ana','Bia','Carlos', 'Daniel'])
})

p.then(primeiroElemento)
 .then(primeiroElemento)
 .then(letraMinuscula)
    .then(console.log)



