// Todos Array
let todos = [];
// Grabbing Elements
let todoList = document.getElementById("todo-list");
let todoInput = document.getElementById("new-todo");
let addTodoBtn = document.getElementById("add-todo");

function addTodo() {
  //   Create a new todo
  let todoID = `todo-${todos.length}`;
  let todo = {
    id: todoID,
    content: todoInput.value,
    done: false,
    created_at: new Date(),
  };
  // adding it to the todos array
  todos.push(todo);

  let todoTemplate = document.getElementById("todo-template");
  // Creating todo element by cloning the template
  todoHTML = todoTemplate.content.cloneNode(true);
  todoHTML.id = todoID;

  todoHTML.querySelector("p").innerText = todo.content;
  let todoChecked = todoHTML.querySelector("input");

  todoList.appendChild(todoHTML);

  // check the todo
  todoChecked.addEventListener("change", function () {
    todo.done = !todo.done;
    if (todo.done) {
      todoHTML.classList.add("line-through");
    } else {
      todoHTML.classList.remove("line-through");
    }
  });

  //   clear the input
  todoInput.value = "";
}

addTodoBtn.addEventListener("click", () => {
  console.log(todoInput.value.length);
  if (todoInput.value.length > 0) addTodo();
});
