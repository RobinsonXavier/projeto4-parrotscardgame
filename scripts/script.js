
let numeroCartas = Number(prompt("Com quantas cartas você quer jogar ?"));
let ehPar = (numeroCartas % 2 == 0);
let ehImpar = (numeroCartas % 2 !== 0);

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

    let seletor = document.querySelector(".conteudo");

    for(let i = 0; i < numeroCartas; i++) {

        seletor.innerHTML+= 
        `<div class="carta">
            <img src="./imagens/front.png" alt="">
        </div>`;
    }
    


}