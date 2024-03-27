const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");


registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function fazerLogin(){
  var email = document.getElementById("email").value;
  email = email.toLowerCase();
  var password = document.getElementById("password").value;
  password = password.toLowerCase();
  if (email == "admin@admin.com" && password == "admin") { 
      window.location.href = "gerenciarpedido.html"; 
  } else if (email =="user@user.com" && password == "user") { 
      window.location.href = "menu.html"; 
  } else { 
      alert("Senha ou Usuário inválido."); 
  }
}

document.addEventListener('keydown',
function (event){
  if(event.key === 'Enter'){
      fazerLogin()
  }
});

