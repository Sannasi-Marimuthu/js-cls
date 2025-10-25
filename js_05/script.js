// Array - []

const myArray = ['developer', 123, true];
console.log(myArray);

console.log(myArray.length);
console.log(myArray[2]);
console.log(myArray.indexOf[4]);

//add 

//push - last
myArray.push('new item');
console.log(myArray);

//unshift - first
myArray.unshift('first item');
console.log(myArray);

//remove

//pop - last
myArray.pop();
console.log(myArray);


//shift - first
myArray.shift();
console.log(myArray);

//splice - middle
myArray.splice(2, 1); // (index, how many to remove)
console.log(myArray);

myArray.splice(2, 0, 'inserted item'); // (index, how many to remove, item to add)

console.log(myArray);

//reverse
myArray.reverse();
console.log(myArray);

//join
const myString = myArray.join(' : ');
console.log(myString);

//concat
const newArray = ['a', 'b', 'c']
console.log(newArray);
const combinedArray = myArray.concat(newArray);
console.log(combinedArray);

//spread operator

const spreadArray = [...myArray, ...newArray];
console.log(spreadArray);


//Array Example

const frontend = ['html', 'css', 'js'];
const backend = ['nodejs', 'express', 'python'];   
const database = ['mysql', 'sql', 'mongodb'];
const frameworks = ['react', 'angular', 'vue'];

console.log(frontend)
console.log(frontend[1])
console.log(frontend[1],database[0])

const developer = [frontend,frameworks]
console.log(developer)

// console.log(developer[0][0],[1][0])

console.log(developer[0][0],developer[1][1])

const fullStack = [...frontend,...backend,...database,...frameworks]
console.log(fullStack)




//object - { key: value }

// const myObj = {
//     name : "value"
// }

// console.log(myObj);






