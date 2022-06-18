
let numeroCartas = Number(prompt("Com quantas cartas você quer jogar ?"));
let ehPar = (numeroCartas % 2 == 0);
let ehImpar = (numeroCartas % 2 !== 0);

let listaParrots = [` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/fiestaparrot.gif" alt="">
</div>
</div>`, ` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/metalparrot.gif" alt="">
</div>
</div>`,` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/unicornparrot.gif" alt="">
</div>
</div>`,` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/explodyparrot.gif" alt="">
</div>
</div>`,` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/bobrossparrot.gif" alt="">
</div>
</div>`,` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/tripletsparrot.gif" alt="">
</div>
</div>`,` <div class="carta virar" onclick="swap(this)">
<div class="frente face">
    <img class= "estampa" src="./imagens/front.png" alt="">
</div>
<div class="costas face">
    <img class= "estampa sumir" src="./imagens/revertitparrot.gif" alt="">
</div>
</div>`];

listaParrots.sort(comparador);

if (numeroCartas >= 4 && numeroCartas <= 14 && ehPar ) {
    shuffle();

} else {
    numeroCartas = prompt("Com quantas cartas você quer jogar ?");

     while(numeroCartas < 4 || numeroCartas > 14 || ehImpar || numeroCartas == isNaN) {
        numeroCartas = prompt("Com quantas cartas você quer jogar ?");
    }

    shuffle();
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

function swap(element) {
    
    element.classList.toggle("virar");
    let seletor = element.querySelector(".costas .estampa");
    seletor.classList.toggle("sumir")

    
}

function comparador() {
    return Math.random() - 0.5;
}
