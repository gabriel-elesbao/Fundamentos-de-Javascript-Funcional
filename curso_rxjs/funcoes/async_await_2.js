function gerarNumerosEntre(min,max, numeroProibidos){
    if(min >  max){
        [max, min] = [min, max]
    }
    return  new Promise((resolve, reject) =>{
        const fator = max-min + 1
        const aleatorio = parseInt(Math.random()*fator)+min
        if(numeroProibidos.includes(aleatorio)){
            reject('Número repetido')
        } else{
            resolve(aleatorio)
        }
       
    })
}

async function GerarMegaSena(qtdeNumeros, tentativas = 1){
    try{

        const numeros =[]
        for(let _ of Array(qtdeNumeros).fill()){
        numeros.push(await gerarNumerosEntre(1,60, numeros))
        }
        return numeros

    } catch(e){
        if(tentativas > 10){

            throw 'Que chato!'

        }else{
            return GerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
    
}

GerarMegaSena(20)
  .then(console.log)
  .catch(console.log)

