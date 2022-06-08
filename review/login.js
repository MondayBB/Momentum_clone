const loginForm = document.querySelector("#login");
const inputId = document.querySelector("#login input:first-child");

const logoutForm = document.querySelector("#logout");

const greeting = document.querySelector("#greeting");
const greetingName = document.querySelector("#greeting .yourName");

const HIDDIN_CLASS = "hidden";

// 로그인하는 함수
function loginSubmit(event){
  const yourName = inputId.value;

  event.preventDefault(); // LOGIN 눌렀을 때 새로고침 되는 거 막음

  greetingName.innerText = `hello ${yourName}`;
  
  loginForm.classList.add(HIDDIN_CLASS);
  greeting.classList.remove(HIDDIN_CLASS);
  logoutForm.classList.remove(HIDDIN_CLASS);
}

// 로그아웃하는 함수
function logoutSubmit(){
  loginForm.classList.remove(HIDDIN_CLASS);
  greeting.classList.add(HIDDIN_CLASS);
  logoutForm.classList.add(HIDDIN_CLASS);
  inputId.value = ""
}

loginForm.addEventListener("submit", loginSubmit);
logoutForm.addEventListener("submit", logoutSubmit);

