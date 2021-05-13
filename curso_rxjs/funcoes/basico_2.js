function bomDia(){
    console.log('Bom dia')
}
const boaTarde = () => {
    console.log('Bom tarde')
}



function executarQualquerCoisa(fn){
    if (typeof fn === 'function'){
        fn()
    }
    // fn()
}

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2) Retornar uma função a partir de uma outra função

function potencia (base){
    return (exp)=> {
       return Math.pow(base, exp)
    }
}

// Uma forma de passar a potencia
const  potenciaDe2 = potencia(2) 
console.log(potenciaDe2(8))

//segunda forma de passar uma potencia
console.log(potencia(3)(4))


