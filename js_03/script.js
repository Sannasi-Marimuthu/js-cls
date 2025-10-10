//function

// name@gmail.com = name
//name1@gmail.com = name1

// console.log("name-san@gmail.com".slice(0,"name-san@gmail.com".indexOf("@")));
// console.log("name-san@gmail.com".slice(0,"name-san@gmail.com".indexOf("@")));
// console.log("name-san@gmail.com".slice(0,"name-san@gmail.com".indexOf("@")));
// console.log("name-san@gmail.com".slice(0,"name-san@gmail.com".indexOf("@")));
// console.log("name-san@gmail.com".slice(0,"name-san@gmail.com".indexOf("@")));
// console.log("name-san@gmail.com".slice(0,"name-san@gmail.com".indexOf("@")));
// console.log("name-san@gmail.com".slice(0,"name-san@gmail.com".indexOf("@")));
// console.log("name-san@gmail.com".slice(0,"name-san@gmail.com".indexOf("@")));

// var email = ""

// console.log(email.slice(0,email.indexOf("@")));

// function getEmail(email){
//     return email.slice(0,email.indexOf("@"));
// }

// console.log(getEmail("sannasi@gmail.com"))

// console.log(getEmail("san@gmail.com"))
// console.log(getEmail("sannasi1@gmail.com"))
// console.log(getEmail("sannasi2@gmail.com"))
// console.log(getEmail("sannasi3@gmail.com"))

// toUpperCase()  = SAN
// toLowerCase () - san

// mahixinfotech  = Mahixinfotech

// function toPropperCase (name){
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }

// console.log(toPropperCase("MAHIXINFOTECH"));

// toUpperCase()

//Arrow Function

// const funName = (name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }

// console.log(funName("sbchjsdbbdjkvb"));

//var , reasign & redeclare = yes
// let , redeclare = no , reasign = yes
// const , redeclare = no , reasign = no

// let x = 1;
// x = 2;
// console.log(x);

// var y = 3
// var y =4
// console.log(y);

// const z = 5

//  z = 6

// console.log(z);

//scope

var a = 1; //global

let b = 2; //local / block

const c = 3; //local / block

{
  let b = 20;

  console.log(b);
}

b = 200;

console.log(b);

function test(){
    const c = 10
    console.log(c);
}
test();
console.log(c);


// loops
// array 
// object
// class
// map
// json