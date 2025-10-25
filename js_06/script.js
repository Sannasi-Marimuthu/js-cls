// Object
// let person = {
//     name:"priya",
//     age:20,
//     developer : {
//         front:"react",
//         back:"nodejs",
//         db:"mongodb"
//     },
//     adult:true,
//     team:["trainer","junior","senior"],
//     action:function (){
//         return `Hello ${this.name} Coder!` 
//        }
// }

// console.log(person.action());


const vechile = {
    doors :2,
    color:"red",
    engine: function () {
        return "V8"
    }
}

// console.log(vechile.engine());

const car = Object.create(vechile);
// car.doors = 4;
console.log(vechile.doors);
console.log(car.doors);


const movie = {
    actor :"vijay",
    director:"AR murugadoss",
    music:"Yuvan",
    producer:"Lyca",
}

console.log(Object.keys(movie))
console.log(Object.values(movie))

for (let job in movie){
    console.log(movie[job])
}

//add new property
movie.actress = "katrina"
console.log(movie)

//delete property
delete movie.producer

console.log(movie)


const {actor, music} = movie
console.log(actor)

function sings ({music}) { 
    return music;
}

console.log(sings(movie)) 


// todo app

//add
//remove
//filter
//view all

//async await, map , json