
let numeroCartas = prompt("Com quantas cartas você quer jogar ?");
let contadorFinal = 0;
let contador = 0;
let contadorTempo = 0;
let listaParrots = [` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/fiestaparrot.gif" alt="">
    <h6>1</h6>
</div>
</div>`, ` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/metalparrot.gif" alt="">
    <h6>2</h6>
</div>
</div>`,` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/unicornparrot.gif" alt="">
    <h6>3</h6>
</div>
</div>`,` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/explodyparrot.gif" alt="">
    <h6>4</h6>
</div>
</div>`,` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/bobrossparrot.gif" alt="">
    <h6>5</h6>
</div>
</div>`,` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/tripletsparrot.gif" alt="">
    <h6>6</h6>
</div>
</div>`,` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/revertitparrot.gif" alt="">
    <h6>7</h6>
</div>
</div>`];

listaParrots.sort(comparador);

function filtrar() {

    while(numeroCartas === null || !cartasValidadas()) {

        numeroCartas = prompt("Com quantas cartas você quer jogar ?");

    }

}

function ehPar(numeroCartas) {
    if(Number(numeroCartas) % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function opcoesValidas(numeroCartas) {
    if(Number(numeroCartas) >= 4 && Number(numeroCartas) <= 14) {
        return true;
    } else {
        return false;
    }
}

function cartasValidadas () {
    return ehPar(numeroCartas) && opcoesValidas(numeroCartas);
}

function shuffle() {

    let arrayPares = [];
    arrayPares = listaParrots;

    let arrayFinal= []
    let seletor = document.querySelector(".conteudo");

    for(let i = 0; i < (numeroCartas / 2); i++) {
        arrayFinal.push(listaParrots[i]);
        arrayFinal.push(arrayPares[i]);
    }
    
    arrayFinal.sort(comparador);

    for(let i = 0; i < numeroCartas; i++) {
        seletor.innerHTML += arrayFinal[i];
    }
}

function resetar() {

    let selecao = document.querySelectorAll(`.selecionado${contador}`);

    for(let index = 0; index < 2; index++) {
        selecao[index].classList.add("virar");
        selecao[index].querySelector(".costas .estampa").classList.add("sumir");
        selecao[index].classList.remove(`selecionado${contador}`);
    }
}

function final() {
    contadorFinal++;
    if(document.querySelector(".virar") == null) {
        alert(`Você ganhou em ${contadorFinal} jogadas!`)
    }
}

function swap(element) {

    let seletor = element.querySelector(".costas .estampa");
    let selecionarValor = element.querySelector(".costas h6");
    let valorInterno = selecionarValor.innerHTML;
    let element2 = document.querySelector(`.selecionado${contador}`);
    element.classList.add(`selecionado${contador}`);
    

    if(element2) {
        let selecionarValor2 = element2.querySelector(".costas h6");
        let valorInterno2 = selecionarValor2.innerHTML;
    
        if(valorInterno == valorInterno2) {
            contador++;
        } else {
            setTimeout(resetar, 1000);
        }
    }
    if (element.classList.contains("virar")) {
        element.classList.remove("virar");
        seletor.classList.remove("sumir");
        final();
        perguntar();
    } 
    

    
}

function comparador() {
    return Math.random() - 0.5;
}

function contarTempo() {
    contadorTempo++;
    document.querySelector(".clock").innerHTML = `<h2>${contadorTempo}</h2>`;   
    if (document.querySelector(".virar") == null) {
        clearInterval(idInterval);
    }
}

function perguntar() {
    if (document.querySelector(".virar") == null) {
        let pergunta = prompt("Gosta de reiniciar a partida ?");
        if(pergunta == "sim") {
            window.location.reload(true);
        } else if (pergunta == "não") {
            alert("Tenha um bom dia")
        }
    }
} 

document.querySelector(".clock").innerHTML = `<h2>${contadorTempo}</h2>`;   

let idInterval = setInterval(contarTempo, 1000);


filtrar();

shuffle();
