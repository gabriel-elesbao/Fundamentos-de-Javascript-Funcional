const numbers = [1,2,3,4,5,6]

const numbersV2 = numbers.map((elemento)=>{
    return elemento *2
})

// ----------------versão mais enxuta
const numbersV2 = numbers.map( elemento => elemento *2)

console.log(numbersV2)

const students = [
    {
        name:'Jake',
        score: 6.4
    },
    {
        name:'Susan',
        score: 8.6
    },
    {
        name:'Emma',
        score: 9.4
    },
    {
        name:'Peter',
        score: 9.1
    },

]

const  getScore = elemento => elemento.score
               

 const result=  students
                .map(getScore)
                .map(Math.ceil) //irá arredondar para cima, para arredondar para baixo, seria Math.floor
console.log(result)
console.log(students.map(getScore))


const notas = [20,10,5,6,7,15];
const getNotas = notas => notas>=6;
const result = notas.map(getNotas[0]);
console.log(result);


