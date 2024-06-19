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
        document.querySelector(".tableCards").innerHTML += `<div class="card" onclick="virar(this)">
                                                                <div class="front"><img src="./src/img/front.png"></div>
                                                                <div class="back"><img src="/src/img/${backgroundGifs[baralho[i]]}.gif"></div>
                                                            </div>`;
    }
    cards = document.querySelectorAll('div.card');
}

function virar(el) {
    el.classList.add("selecionada")
    el.classList.toggle("virarda")
}

jogoInvalido()