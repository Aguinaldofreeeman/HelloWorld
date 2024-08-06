let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome, fera!?");
}

if(nomeUsuário == null){
    elemento.textContent = 'você é muito bem-vindo.';
}else{
    elemento.textContent = nomeUsuário;
}