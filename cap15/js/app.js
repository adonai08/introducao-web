const nome=document.getElementById("nome");
const email=document.getElementById("email");
const senha=document.getElementById("senha");
const confirmar=document.getElementById("confirmar");
const mensagem=document.getElementById("mensagem");
const telefone=document.getElementById("telefone");
const foto=document.getElementById("foto");

nome.addEventListener("input",validarNome);
email.addEventListener("input",validarEmail);
senha.addEventListener("input",validarSenha);
confirmar.addEventListener("input",confirmarSenha);

mensagem.addEventListener("input",()=>{

contador.innerHTML=mensagem.value.length;

});

telefone.addEventListener("input",(e)=>{

let v=e.target.value.replace(/\D/g,'');

v=v.replace(/^(\d{2})(\d)/g,"($1) $2");

v=v.replace(/(\d{5})(\d)/,"$1-$2");

e.target.value=v;

});

senha.addEventListener("input",()=>{

const barra=document.getElementById("forcaSenha");

const valor=senha.value;

let pontos=0;

if(valor.length>=8)pontos++;

if(/[A-Z]/.test(valor))pontos++;

if(/[0-9]/.test(valor))pontos++;

if(/[!@#$%]/.test(valor))pontos++;

barra.style.width=(pontos*25)+"%";

barra.style.background=
pontos<2?"red":
pontos<4?"orange":
"green";

});

foto.addEventListener("change",()=>{

const arquivo=foto.files[0];

if(!arquivo)return;

if(arquivo.size>2*1024*1024){

alert("Arquivo maior que 2MB");

foto.value="";

return;

}

const leitor=new FileReader();

leitor.onload=e=>{

preview.src=e.target.result;

}

leitor.readAsDataURL(arquivo);

});

mostrarSenha.addEventListener("click",()=>{

senha.type=
senha.type==="password"?
"text":"password";

});

formCadastro.addEventListener("submit",(e)=>{

e.preventDefault();

if(

validarNome()&&
validarEmail()&&
validarSenha()&&
confirmarSenha()

){

localStorage.setItem("nome",nome.value);

alert("Cadastro realizado com sucesso!");

}

});

window.onload=()=>{

nome.value=localStorage.getItem("nome")||"";

};