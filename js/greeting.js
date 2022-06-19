import {toDoForm} from './todo.js';
import {toDoList} from './todo.js';

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout");

//일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.
const HIDDEN_CLASS = "hidden";  
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  const userName = loginInput.value;
  
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem(USERNAME_KEY, userName);
  
  paintGreetings(userName);
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
  logout.classList.remove(HIDDEN_CLASS);
  toDoForm.classList.remove(HIDDEN_CLASS);
  toDoList.classList.remove(HIDDEN_CLASS);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else{ 
  paintGreetings(savedUserName);
}

function logoutSubmit(){
  localStorage.removeItem(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASS);
  logout.classList.add(HIDDEN_CLASS);
  toDoForm.classList.add(HIDDEN_CLASS);
  toDoList.classList.add(HIDDEN_CLASS);
  loginForm.classList.remove(HIDDEN_CLASS);
  location.reload();
}

logout.addEventListener("click", logoutSubmit);