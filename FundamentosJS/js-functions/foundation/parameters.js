function logParams(a,b,c){
    console.log(a,b,c)
}

logParams(1,2,3)

// Definindo um valor padrao para um parametro
function defaultParams(a,b,c=0){
    console.log(a,b,c)
}

defaultParams(7,8,10)


// Passando um array como parametro------------------------------------------------
console.log("// Passando um array como parametro")
function logNums(nums){
    for(let n of nums){
        console.log(n)
    }
}

logNums(1,2,3);

//Utilizando Spread/rest-------------------------------------------------------------------------------
console.log("//Utilizando Spread/rest")
function logNums(...nums){ //Significa que a função pode receber uma quantidade variavel de parametros e todos os paremetros são armazenados dentro de uma função

        console.log(nums)
    
}
logNums(1,2,3,4,5,6);


console.log("//Somando um array")
function sumAll(...nums){
    let total =0
    for(let n of nums){
        total+=n;
    }
    return total;
}

console.log(sumAll(2,3,4,15))