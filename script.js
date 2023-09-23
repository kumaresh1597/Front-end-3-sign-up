const continueBtn = document.getElementById("btn");

const userForm = document.getElementById("user-form");

const error = document.getElementById("error");



continueBtn.addEventListener("click",(event)=>{

    event.preventDefault();

    let accessToken = localStorage.getItem("token");

    if(accessToken){
        window.location.href = "http://127.0.0.1:5500/profile.html";
    }else{
        const myName = document.getElementById("name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const cPassword = document.getElementById("conform-password");

    if(password.value !== cPassword.value && password){
        error.innerText = "Password mismatch";
        error.style.color = "red";
       return alert("Password mismatch");
    } else{
        const token = generateAccessToken();
        localStorage.setItem("name",`${myName.value}`);
        localStorage.setItem("email",`${email.value}`);
        localStorage.setItem("password",`${password.value}`);
        localStorage.setItem("token",`${token}`);
        error.innerText = "Log in successful";
        error.style.color = "green";

        if(myName.value && email.value && password.value){
            window.location.href = "http://127.0.0.1:5500/profile.html";
        }
        else{
            error.innerText = "All feilds are required*";
            error.style.color = "red";
            return alert("All feilds are required*");
        }  
      }
    }
});

function generateAccessToken(){
    let char = "123rety45gfhret";
    let token = '';

    for(let i=0;i<16;i++){
        token += char.charAt(Math.floor(Math.random()*char.length));
    }
    return token;
}


