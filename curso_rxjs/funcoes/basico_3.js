




const somar = (...numeros) =>{
    let total=0;

    console.log(Array.isArray(numeros) ? "é um array": '')

    for (let n of numeros){
        total += n
    }
    return total;
}

const result = somar(10,20,20,20,1);
console.log(result)


const exp = base => exp =>  Math.pow(base, exp)


console.log(exp(2)(4))

// this
Array.prototype.log = function(){
     console.log(this[this.length -1])
}
const numeros= [1,2,3]
numeros.log()

console.log(0 ? true: false)