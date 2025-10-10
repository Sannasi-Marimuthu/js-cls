// Data types

// String - "dfhj"
// Number - 57667
// Boolean - true / fales
// undefined -

//boolean - true / false

// myNum = 18;

// console.log(myNum);

// String method

myCode = "Developer done"
console.log(myCode)
//length
console.log(myCode.length)
//charAt
console.log(myCode.charAt(0))
//indexOF
console.log(myCode.indexOf("e"))
//lastindexof
console.log(myCode.lastIndexOf("e"))
//slice
console.log(myCode.slice(6,9))

//uppercase
console.log(myCode.toUpperCase())

//lowercase
console.log(myCode.toLowerCase())

//includes
console.log(myCode.includes("z"))

//split
console.log(myCode.split(""))

//var , let , const
//Numbers

const myNumber = 37
const myNumber1 = "5"
const myFloat = 37.01
console.log(myNumber) //int 
console.log(myNumber1)  
console.log(myFloat)  

console.log(myNumber===myFloat)

//string to number

const myVar = "51"
console.log(myVar)
console.log(myVar+4)

console.log(Number(myVar)+4)

// console.log("55"+5)

console.log(Number("Code")+5)

//Not a Number - NaN


console.log(Number(undefined)+5)


console.log(Number(true)+5) //true -1
console.log(Number(false)+5) // false - 0


//int
console.log(Number.isInteger(42.9)) // passing the value

//parseFloat

const myDigit = "123.123abc"

console.log(Number.parseFloat(myDigit))

//parseint

const myDigit1 = "12abc676787.12"


console.log(Number.parseInt(myDigit1))

//fixed

const myFix = "4546.782889689798"

console.log(Number.parseFloat(myFix).toFixed(3))

//number - string

const myNum2 = 45.89

console.log(myNum2.toString());



//chaining


const myFix1 = "4546.782889689798"

console.log(Number.parseFloat(myFix1).toFixed(3))


// NaN
console.log(Number.isNaN("ggh"));

// console.log(Number.isNaN(42));

// Math

console.log(Math.PI)


//trunc

console.log(Math.trunc(5.7))


//round-of


console.log(Math.round(5.7))


//ceil

console.log(Math.ceil(4.01))


//floor

console.log(Math.floor(4.9))

//pow


console.log(Math.pow(10,2))
console.log(Math.pow(3,3))

// min
console.log(Math.min(4,78,34,23,89))
console.log(Math.max(4,78,34,23,89))

//random 0 -10

// console.log(Math.random()*10)
// console.log(Math.floor(Math.random()*10)+1)


// o.1 - 0.9 * 10 = 9 // 1- 9
console.log(Math.floor(Math.random()*10)+1)

// console.log(Math.floor(1.9)) 

// mahixinfotech



