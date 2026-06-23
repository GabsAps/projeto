var totalAtividades = document.getElementById("total-atividades");
var totalCalorias = document.getElementById("total-calorias");
var nomePerfil = document.getElementById("nome-perfil");
var botaoCriar = document.getElementById("botao-criar-atividade");
var botaoAuth = document.getElementById("botao-autentificacao");

var botoesFiltro = document.querySelectorAll(".botao-filtro");

totalAtividades.textContent = "67";
totalCalorias.textContent = "23";
nomePerfil.textContent = "Os menininhos do SENAI";

botaoCriar.disabled = false;

//botaoAuth.class.add('ativo');

//elemento.addEventListener('click', function(){
//codigo que roda quando click
//})

botaoAuth.addEventListener("click", function () {
  console.log("Obotão foi clicado");
});

botaoCriar.addEventListener("click", function () {
  console.log("O botão criar foi clicado");
});

botoesFiltro.forEach(function (botao) {
  botao.addEventListener("click", function () {
    var tipo = botao.getAttribute("data-tipo");
    console.log("Filtro clicado: ", tipo);
  });
});
