//passando funções como parametro para outras funções ou retornando funções

function run(fn){
    return `Result: ${fn()}`
}

function sayHello(){
    console.log('Hello!!')
}

run(sayHello)

run(()=>{
    console.log('run!!!')
})

const result  = run(Math.random)
console.log(result)