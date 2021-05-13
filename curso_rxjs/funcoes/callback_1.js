



function somaTerminal(valor1,valor2){   
    const total = valor1 + valor2;
    console.log(total)
}



function exec(fn,n1,n2){
    fn(n1,n2)
}

exec(somaTerminal,50,50)

const hello = ()=> console.log("Boa tarde!!")

setInterval(hello, 1000)


