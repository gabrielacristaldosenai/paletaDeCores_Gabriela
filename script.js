let tela = document.querySelector("#telaPintura");
let corVermelho = document.querySelector("#pincelVermelho");
let corLaranja = document.querySelector("#pincelLaranja");
let corAmarelo = document.querySelector("#pincelAmarelo");
let corVerde = document.querySelector("#pincelVerde");
let corAzul = document.querySelector("#pincelAzul");
let corRoxo = document.querySelector("#pincelRoxo");
let corRosa = document.querySelector("#pincelRosa");
let corMarrom = document.querySelector("#pincelMarrom");
let corPreto = document.querySelector("#pincelPreto");
let corBranco = document.querySelector("#pincelBranco");

corVermelho.addEventListener("click", vermelho);
corLaranja.addEventListener("click", laranja);
corAmarelo.addEventListener("click", amarelo);
corVerde.addEventListener("click", verde);
corAzul.addEventListener("click", azul);
corRoxo.addEventListener("click", roxo);
corRosa.addEventListener("click", rosa);
corMarrom.addEventListener("click", marrom);
corPreto.addEventListener("click", preto);
corBranco.addEventListener("click", branco);
let nomeCor = document.querySelector("h3");

function vermelho(){
    tela.style.background = "rgb(192, 1, 1)";
    nomeCor.innerHTML = "Vermelho";
}
function laranja(){
    tela.style.background = "rgb(228, 150, 6)";
    nomeCor.innerHTML = "Laranja";
}
function amarelo(){
    tela.style.background = "rgb(255, 221, 26)";
    nomeCor.innerHTML = "Amarelo";
}
function verde(){
    tela.style.background = "rgb(18, 110, 18)";
    nomeCor.innerHTML = "Verde";
}
function azul(){
    tela.style.background = "rgb(15, 15, 171)";
    nomeCor.innerHTML = "Azul";
}
function roxo(){
    tela.style.background = "rgb(102, 63, 141)";
    nomeCor.innerHTML = "Roxo";
}
function rosa(){
    tela.style.background = "rgb(172, 43, 151)";
    nomeCor.innerHTML = "Rosa";
}
function marrom(){
    tela.style.background = "rgb(116, 43, 17)";
    nomeCor.innerHTML = "Marrom";
}
function preto(){
    tela.style.background = "rgb(0, 0, 0)";
    nomeCor.innerHTML = "Preto";
}
function branco(){
    tela.style.background = "rgb(255, 255, 255)";
    nomeCor.innerHTML = "Branco";
}