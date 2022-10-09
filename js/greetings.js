
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginInput");
const greeting = document.querySelector("#greeting");
const toDoForm = document.querySelector("#toDoForm");
const toDoList = document.querySelector("#toDoList");

const savedUserName = localStorage.getItem(USERNAME_KEY);

function loginSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,loginInput.value);
  paintGreetings();
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${userName}`;
  const resetBtn = document.createElement("span");
  resetBtn.innerText = " [reset]";
  resetBtn.id = "reset";
  greeting.appendChild(resetBtn);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


if (savedUserName === null ) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreetings();
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

const resetBtn = document.querySelector("#reset");
if(resetBtn !== null){
  resetBtn.addEventListener("click",resetUserInfo);
}
function resetUserInfo() {
  if(confirm("로그인한 정보가 삭제됩니다. 정말 리셋하시겠습니까?\nAre you sure?")){
    localStorage.clear();
    location.reload();
  }
}