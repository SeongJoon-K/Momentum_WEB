const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 1. 브라우저의 기본동작을 막는다.
    loginForm.classList.add(HIDDEN_CLASSNAME) // 2. loginForm에서 hidden class 를 추가함.
    const username = loginInput.value; // username이라는 변수를 저장
    localStorage.setItem(USERNAME_KEY, username); // 로컬스토리지에 등록함
    paintGreetings(); // 함수를 실행함
    // 그렇게 되면 hidden이라는 클래스를 갖고 있는 것은 Form만 존재하게 됨
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}