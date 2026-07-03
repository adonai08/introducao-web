function validarNome(){

const nome=document.getElementById("nome");

if(nome.value.length<3){

mostrarErro("erroNome","Nome inválido");

return false;

}

limparErro("erroNome");

return true;

}

function validarEmail(){

const email=document.getElementById("email");

const regex=/^\S+@\S+\.\S+$/;

if(!regex.test(email.value)){

mostrarErro("erroEmail","Email inválido");

return false;

}

limparErro("erroEmail");

return true;

}

function validarSenha(){

const senha=document.getElementById("senha").value;

const regex=/^(?=.*[A-Z])(?=.*\d).{8,}$/;

if(!regex.test(senha)){

mostrarErro("erroSenha","Senha fraca");

return false;

}

limparErro("erroSenha");

return true;

}

function confirmarSenha(){

const s=document.getElementById("senha").value;

const c=document.getElementById("confirmar").value;

if(s!==c){

mostrarErro("erroConfirmar","Senhas diferentes");

return false;

}

limparErro("erroConfirmar");

return true;

}