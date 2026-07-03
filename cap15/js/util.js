function mostrarErro(id, mensagem){

document.getElementById(id).textContent = mensagem;

}

function limparErro(id){

document.getElementById(id).textContent = "";

}

function idade(data){

const hoje = new Date();

const nasc = new Date(data);

let idade = hoje.getFullYear() - nasc.getFullYear();

const mes = hoje.getMonth() - nasc.getMonth();

if(mes < 0 || (mes===0 && hoje.getDate()<nasc.getDate()))

idade--;

return idade;

}