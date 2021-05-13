
//Function expression 

 const increment1 = function(n){
     return n+1
 }

 // Arrow function sempre é uma função anônima
 const increment2 = (n) =>{
     return n+1
 }

 // Simplificando a mesma função, ja que ela recebe apenas um parametro
 const increment3= n=>{
     return n+1
 }

 //Simplificando em uma unica linha
 const increment4= n=>  n+1 // return fica explicito 
 

 console.log(increment1(3))
 console.log(increment2(9))
 console.log(increment3(29))
 console.log(increment4(199))

 const sum = (a,b) => a+b;
 console.log(sum(3,8))


