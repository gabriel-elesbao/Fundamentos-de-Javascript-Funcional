// somar(3)(4)(5)
//calcular(3)(7)(fn)


function sum(n1){
    return(n2)=>{
        return(n3)=>{
           return n1+n2+n3
        }
   }
}



console.log(sum(5)(5)(10))

function calcular(x){
    return (y)=>{
        return (fn)=>{ //fn = function, passando uma função
            return fn(x,y)
        }
    }
}

const subtrair = (a,b)=>{
    return a-b
}
const mult = (a,b)=>{
    return a*b
}

console.log(calcular(10)(5)(mult))

