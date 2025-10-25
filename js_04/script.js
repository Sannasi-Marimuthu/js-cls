// for loop, while loop, do while loop, fon-in , for-of

// for loop ( start - end )

// console.log("#1");
// console.log("#2");
// console.log("#3");
// console.log("#4");
// console.log("#5");
// console.log("#6");
// console.log("#7");
// console.log("#8");

// for(initial Expression, condition , step ) {
//     code
// }


// for (let i =1 ; i <= 9 ; i++) {
//     console.log("Number of ",i);
// }
// ( 1- 10 ++)
// for(let j=1; j<=10; j++){
//     if(j%2!==0){
//         console.log("Odd Number Increment ",j);
//     }
// }

// (20  - 10 --)
// for(let j=20; j>10; j--){
//     if(j%2!==0){
//         console.log("Odd Number Decrement ",j);
//     }
// }

//while loop  ()

// let i = 15;
// while (i >= 1 ) {
//     if(i%2!==0){
//         console.log("odd number #", i);
        
// }
// i--;
// }

// do-while loop
// do {
//     code
// }while (condi)

// let z = 15;

// do {
//     if(z%2!==0){
//         console.log("odd number do while #", z);
//     }   
//     z++;
// }while (z<=10)

//for-in loop ( array && object )

const developer = {
    name : "priya",
    age : 20
}

for (let key in developer ) {
    // console.log("key: ", developer[key]);
    //  - [] - brackert notation
    console.log(key + " : ", developer.key);
   //  - [] - dot notation
}

//array 

let colors = ["red", "green", "blue", "white"];

for (let key in colors) {
    // console.log(key);
    console.log(colors[key]);
}

let fruits = ["apple", "banana", "grapes", "mango"];

for (let index of fruits) {
   console.log("Fruit Name: " + index);
}