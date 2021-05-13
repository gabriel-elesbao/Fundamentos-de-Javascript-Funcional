const numbers = [1,2,3,4,5,6]

const greaterThanZero = elemento => elemento > 0
const pair = elemento => elemento%2 === 0

console.log(numbers.filter(elemento => elemento > 0))
console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(pair))



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

const greatStudents = student => student.score >= 9

console.log(students.filter(greatStudents))
console.log(students)