export default toDoForm;
// export toDoList;

const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos";

// todo input 함수
function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  // input을 빈칸으로 만들고
  toDoInput.value = "";
  // toDos 배열에 input의 value를 넣고
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newToDoObj);
  // todo list를 만드는 함수를 실행
  paintToDo(newToDoObj);
  // todo list를 localStorage에 저장
  saveTodos();
}

// todo list 만드는 함수
function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  li.id = newTodo.id
  li.append(span);
  li.append(btn);

  span.innerText = newTodo.text;
  btn.innerText = "X";

  btn.addEventListener("click", delBtn);
  
  toDoList.append(li);
}


// list 삭제하는 함수
function delBtn(event){
  const selBtn = event.target.parentElement;
  //event는 property를 가지는데 target은 어떤 button이 클릭됐는지를 알려준다. target은 클릭된 HTML element다
  selBtn.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(selBtn.id));
  saveTodos();
}


// localStorage에 todo list를 저장하는 함수
function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


// localStorage에 저장된 todo list가 있으면 객체로 변경하고 각 item에 paintToDo()를 실행하는 조건문
if(savedToDos !== null){
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintToDo);
}