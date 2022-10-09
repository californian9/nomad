const toDoform = document.getElementById("toDoForm");
const toDoInput = toDoform.querySelector("input");

const TODO_LIST_KEY = "toDoList";

let toDoListArr = [];

toDoform.addEventListener("submit",handleToDoSubmit);

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value="";
  const newToDoObj = {
    text:newToDo,
    id:Date.now()
  }
  toDoListArr.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDoList();
}

function saveToDoList() {
  localStorage.setItem(TODO_LIST_KEY, JSON.stringify(toDoListArr));
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  span.addEventListener("click",checkToDo);

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo);
  
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function checkToDo(event) {
  const span = event.path[0];
  span.classList.toggle("strikethrough");
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoListArr = toDoListArr.filter((toDoObj) => toDoObj.id !== parseInt(li.id));
  saveToDoList();
}

const savedToDoList = localStorage.getItem(TODO_LIST_KEY);

if (savedToDoList !== null ) {
  const parsedToDoList = JSON.parse(savedToDoList);
  toDoListArr = parsedToDoList;
  parsedToDoList.forEach(paintToDo);
}