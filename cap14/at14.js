const nomeOriginal = "João Silva";
const cursoOriginal = "Curso: Técnico em Informática";
const fotoOriginal = "imagens/perfil1.jpg";

const nomePerfil = document.getElementById("nomePerfil");
const cursoPerfil = document.getElementById("cursoPerfil");
const fotoPerfil = document.getElementById("fotoPerfil");
const perfil = document.getElementById("perfil");

const temaSelect = document.getElementById("temaSelect");
const fonteRange = document.getElementById("fonteRange");
const valorFonte = document.getElementById("valorFonte");
const mostrarBio = document.getElementById("mostrarBio");
const biografia = document.getElementById("biografiaPerfil");

const emailInput = document.getElementById("emailInput");
const telefoneInput = document.getElementById("telefoneInput");

const emailExibido = document.getElementById("emailExibido");
const telefoneExibido = document.getElementById("telefoneExibido");

const contadorAcoes = document.getElementById("contadorAcoes");
const ultimaAcao = document.getElementById("ultimaAcao");

const btnAlterarNome = document.getElementById("btnAlterarNome");
const btnAlterarCurso = document.getElementById("btnAlterarCurso");
const btnAlterarFoto = document.getElementById("btnAlterarFoto");
const btnDestacarPerfil = document.getElementById("btnDestacarPerfil");
const btnRestaurar = document.getElementById("btnRestaurar");
const btnAtualizarContato = document.getElementById("btnAtualizarContato");

let totalAcoes = 0;

function registrarAcao(acao) {
    totalAcoes++;
    contadorAcoes.textContent = totalAcoes;
    ultimaAcao.textContent = acao;
}

btnAlterarNome.addEventListener("click", () => {

    if (nomePerfil.textContent.trim() === "João Silva") {
        nomePerfil.textContent = "Adonai Narciso";
    } else {
        nomePerfil.textContent = "João Silva";
    }

    registrarAcao("Alteração de nome");
});

btnAlterarCurso.addEventListener("click", () => {

    if (cursoPerfil.textContent.trim() === "Curso: Técnico em Informática") {
        cursoPerfil.textContent = "Curso: Sistemas de Informação";
    } else {
        cursoPerfil.textContent = "Curso: Técnico em Informática";
    }

    registrarAcao("Alteração de curso");
});

btnAlterarFoto.addEventListener("click", () => {

    if (fotoPerfil.src.includes("perfil1.jpg")) {
        fotoPerfil.src = "imagens/perfil2.jpg";
    } else {
        fotoPerfil.src = "imagens/perfil1.jpg";
    }

    registrarAcao("Alteração de foto");
});

btnDestacarPerfil.addEventListener("click", () => {

    perfil.classList.toggle("destaque");

    registrarAcao("Perfil destacado");
});

btnRestaurar.addEventListener("click", () => {

    nomePerfil.textContent = nomeOriginal;
    cursoPerfil.textContent = cursoOriginal;
    fotoPerfil.src = fotoOriginal;

    perfil.classList.remove("destaque");

    temaSelect.value = "claro";
    document.body.classList.remove(
        "tema-escuro",
        "tema-azul"
    );

    fonteRange.value = 16;
    valorFonte.textContent = "16px";
    biografia.style.fontSize = "16px";

    mostrarBio.checked = true;
    biografia.style.display = "block";

    registrarAcao("Perfil restaurado");
});

temaSelect.addEventListener("change", () => {

    document.body.classList.remove(
        "tema-escuro",
        "tema-azul"
    );

    if (temaSelect.value === "escuro") {
        document.body.classList.add("tema-escuro");
    }

    if (temaSelect.value === "azul") {
        document.body.classList.add("tema-azul");
    }

    registrarAcao("Tema alterado");
});

fonteRange.addEventListener("input", () => {

    const tamanho = fonteRange.value;

    biografia.style.fontSize = tamanho + "px";
    valorFonte.textContent = tamanho + "px";
});

fonteRange.addEventListener("change", () => {
    registrarAcao("Tamanho da fonte alterado");
});

mostrarBio.addEventListener("change", () => {

    if (mostrarBio.checked) {
        biografia.style.display = "block";
    } else {
        biografia.style.display = "none";
    }

    registrarAcao("Exibição da biografia alterada");
});

btnAtualizarContato.addEventListener("click", () => {

    emailExibido.textContent =
        "E-mail: " + emailInput.value;

    telefoneExibido.textContent =
        "Telefone: " + telefoneInput.value;

    registrarAcao("Contato atualizado");
});