const numbers = [1,2,3,4,5,6]

const sum = (total, elemento)=> total+elemento
const total = numbers.reduce(sum, 0)


const avg = (acc, el, i, array)=>{  //Acumulador, elemento, indice, array
    if(i === array.length -1) {
        return (acc+el) / array.length 
    }else {
        return acc+el
    }
}
const result = numbers.reduce(avg, 0)


console.log("Total: "+total)
console.log("Média: "+ result)