let numberCards = prompt("Escolha a quantidade de cartas, numeros pares de 4 a 14");
let cards;
const backgroundGifs = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot',
];
let jogadas = null;
let tempo = null;
let baralho = [];

function comparador() { 
	return Math.random() - 0.5; 
}

function jogoInvalido() {
    if (numberCards % 2 == 0 && numberCards >= 4 && numberCards <= 14) {
        renderizarBaralho()
    } else {
        while (!(numberCards % 2 === 0 && numberCards >= 4 && numberCards <= 14)) {
            numberCards = prompt("Erro, tente novamente. Insira um número par de 4 a 14:");
        }
        renderizarBaralho()
    }
}

function renderizarBaralho() {
    
    for (let i = 0; i < numberCards/2; i++) {
        baralho.push(i)
        baralho.push(i)
    }
    baralho.sort(comparador)

    for (let i = 0; i < numberCards; i++) {
        document.querySelector(".tableCards").innerHTML += `<div class="card ${[baralho[i]]}" onclick="virar(this)">
                                                                <div class="front"><img src="./src/img/front.png"></div>
                                                                <div class="back"><img src="/src/img/${backgroundGifs[baralho[i]]}.gif"></div>
                                                            </div>`;
    }
    cards = document.querySelectorAll('div.card');
}

let primeiraCarta = '';
let segundaCarta = '';

function verificarCartas() {
    let className1 = primeiraCarta.className
    let className2 = segundaCarta.className

    if (className1 === className2) {

        primeiraCarta.classList.add('virada')
        segundaCarta.classList.add('virada')
        
        primeiraCarta = '';
        segundaCarta = '';
    
    } else {

        setTimeout(()=>{
            primeiraCarta.classList.remove('virada')
            segundaCarta.classList.remove('virada')

            primeiraCarta = '';
            segundaCarta = '';
        }, 500 );
    }

    finalizar()
}

function virar(el) {
    if (primeiraCarta === '') {
        el.classList.toggle("virada")
        primeiraCarta = el
    } else if (segundaCarta === '') {
        el.classList.toggle("virada")
        segundaCarta = el
        verificarCartas()
    }
}

function finalizar() {

    let allFlipped = true;

    for (let i = 0; i < cards.length; i++) {
        if (!cards[i].classList.contains('virada')) {
          allFlipped = false;
        }
      }

      if (allFlipped) {

        setTimeout(() => {
            prompt(`Voce terminou com ${jogadas} e ${tempo}, que jogar de novo?`);
        }, 500 );
      }
}

var sec = document.getElementsByClassName('segundos')[0].innerHTML;

setInterval(() => {
    tempo++
    sec = tempo
}, 1000);

console.log(tempo)

jogoInvalido()