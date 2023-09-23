
const myName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const token = document.getElementById("token");

const logOut = document.getElementById("logout-btn");

 myName.innerText = localStorage.getItem("name");
 email.innerText = localStorage.getItem("email");
 password.innerText = localStorage.getItem("password");
 token.innerText = localStorage.getItem("token");

 logOut.addEventListener("click",(event)=>{
       event.preventDefault();
       
        localStorage.clear();

        window.location.href = "http://127.0.0.1:5500/index.html";
 });