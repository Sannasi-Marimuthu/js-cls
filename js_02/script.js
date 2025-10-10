// if - else

//syntax

// if(condition) {
//     code
// }
// else {
//     code
// }

let condition = false;

if (condition) {
  console.log("true value");
} else {
  console.log("false valse");
}

// ex : 2

let weather = "hot";

if (weather === "hot") {
  console.log("weather is hot");
} else {
  console.log("weathers is cold");
}

// else-if

// 12am - 13pm - gud mrg
//13pm - 16pm - gud aftr
//16pm - 23am - gud ni8

let hour = new Date().getHours();

if (hour >= 0 && hour <= 13) {
  console.log("gud mrg");
} else if (hour >= 14 && hour <= 16) {
  console.log("gud aftr");
} else {
  console.log("gud ni8");
}

let hour1 = new Date().getHours();
console.log(hour1);

//swtich case

// switch(condition){
//     case1 : code;

//     case2: code;
//         default: code;

// }


//grade - a - spr, e - pass, s - spr , unkonwn


function sum(num1, num2, num3){
    return num1 + num2 - num3;
}

console.log(sum(10,20, 5));


let grade = 's'

switch(grade){
    case "s":
    case "y":
   console.log("Spr grade");
    break;
    case "a" : console.log("Excellent grade");
    break;
    case "e" : console.log("Pass");
    break;
    default : console.log("Unkonwn grade");  
}

//ternary operator

// condition ? true : false


const age = 6

const san = age >=18 ? "Adult" : "child"

console.log(san);

if(age>=18){
    console.log("Men");
}
else {
    console.log("baby");
    
}

// funtion nameDummy() {
//     return condition1 ? value1 :
//         condition2 ? value4 : value5

// }


// alert("Hi San")

// let booblean1 = confirm("Welcome user")
// console.log(booblean1);


// let myName = prompt("Enter your name");
// console.log(myName);

//  ?? - null colasking

// condi ? true : false


// let yourName = prompt("Enter My name")
// console.log(yourName ?? "You Don't Enter Your Name");
//



// function 
{
    //code
}

 //

// function testCode(param1, param2) {
//     //code
//  }


// console.log(sum(55,5,7));
