function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject)=>{
        try{ 
            con.log('temp') //erro 

            if(Math.random() < chanceErro){
                reject('Ocorreu um erro')
            } else{
                resolve(valor)
            }

        } catch(e){ //execção 
            reject(e)
        } 
        
    })
}


funcionarOuNao('testando...', 0.5)
    .then(v=>`Valor: ${v}`)
    .then(
        v=> consol.log(v),
        err => console.log(`Erro esp.: ${err}`)
    )
    .then()
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(()=>console.log('Fim'))

