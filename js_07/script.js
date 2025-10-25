// // Json - JavaScript Object Notation

// const myBook = {
//     name : "Learn JavaScript",
//     content : ["frontend", "backend", "database"],
//     sub :function(){
//         console.log("JavaScript Fundamentals");
//     }
// }
// myBook.sub();
// // send to server
// const sendJson = JSON.stringify(myBook)
// console.log(sendJson);

// // receive from server
// const receiveJson = JSON.parse(sendJson)
// console.log(receiveJson);

// Todo list application

// Add todo
// display todo
// delete todo
// search todo

// let todos = [];

// function displayTodos(todos) {

//      let todoList = document.getElementById("todoList");

//     todoList.innerHTML += ''
//   // forEach
//   todos.forEach((item) => {
//     // console.log(item);

//     let li = document.createElement("li");

//     li.innerHTML = item;
//     todoList.appendChild(li);
//   });
// }
// let addTodo = () => {
//     let dummy = document.getElementById("todoInput").value

//     todos.push(dummy)

//     displayTodos(todos)
// }
// displayTodos(todos);

// // addTodo()

// document.getElementById("addTodo").addEventListener("click", addTodo)
let todos = [];

// let task = {"id":3, "name":"learn js", "isCompleted" : "true"}

function displayTodos(todos) {
  let todoList = document.getElementById("todoList");

  // Clear the previous list before re-rendering
  todoList.innerHTML = "";

  // Loop through and display each todo
  todos.forEach((item) => {
    let li = document.createElement("li");

    li.innerHTML = `${item["name"]} <button onClick="deleteTodo(${item["id"]})"  >Delete</button> `;

    todoList.appendChild(li);
  });
}

// objectElementHTML

let addTodo = () => {
  let dummy = document.getElementById("todoInput").value;

  const todo = {
    id: Date.now(),
    name: dummy,
    completed: false,
  };

  todos.push(todo);
  console.log(todos);
  displayTodos(todos);
};

function deleteTodo(id) {
  todos = todos.filter((item) => item.id !== id);
  displayTodos(todos);
}


function searchTodos () {
//  let searchText =  document.getElementById("searchTodo").value

//  let filteredTodos = todos.filter(item => item.name.includes(searchText))

//  displayTodos(filteredTodos)
 let searchText = document.getElementById("searchTodo").value;
  let filteredTodos = todos.filter((item) =>
    item.name.includes(searchText)
  );
  displayTodos(filteredTodos);

}






displayTodos(todos);

// addTodo()

document.getElementById("addTodo").addEventListener("click", addTodo);

document.getElementById("searchTodo").addEventListener("keyup", searchTodos)


