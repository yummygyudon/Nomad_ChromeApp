const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
// "#login-form input" 가능
const loginButton = loginForm.querySelector("button");
// "#login-form button" 가능

function onLoginBtnClick(){
  console.log("click!!")
}

loginButton.addEventListener("click",onLoginBtnClick) ;