const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

// todo input 함수
function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

// todo list 만드는 함수
function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  li.append(span);
  li.append(btn);

  span.innerText = newTodo;
  btn.innerText = "❌";

  btn.addEventListener("click", delBtn);
  
  toDoList.append(li);
}

// list 삭제하는 함수
function delBtn(event){
  const selBtn = event.target.parentElement;
  selBtn.remove();
}
toDoForm.addEventListener("submit", handleToDoSubmit);