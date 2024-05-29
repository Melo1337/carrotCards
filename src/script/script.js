let numberCards = prompt("Escolha a quantidade de cartas, numeros pares de 4 a 14")
let cards = document.querySelectorAll(".card");
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
        numberCards = prompt("erro tente novamento, numeros pares de 4 a 14")
    }
}

function renderizarBaralho() {
    for (let i = 0; i < numberCards/2; i++) {
        baralho.push(i)
        baralho.push(i)
    }
    baralho.sort(comparador)

    for (let i = 0; i < numberCards; i++) {
        document.querySelector(".tableCards").innerHTML += `<div class="card new" onclick="turn(this)"><img src="/src/img/${backgroundGifs[baralho[i]]}.gif"</div>`;
    }
}

jogoInvalido()

console.log(baralho)
// let playCards = [];
// let cardsInGame = [];
// const backgroundGifs = [
//     'bobrossparrot',
//     'explodyparrot',
//     'fiestaparrot',
//     'metalparrot',
//     'revertitparrot',
//     'tripletsparrot',
//     'unicornparrot',
// ];

// function backgroundGifIndice() {
//     const randomIndex = Math.floor(Math.random() * backgroundGifs.length);
//     cardsInGame.push(randomIndex)
//     nameGif = backgroundGifs[randomIndex];
//     console.log(cardsInGame)
//     return nameGif
// }

// function comparador() {
//     return Math.random() - 0.5;
// }

// function start() {
//     if (numberCards % 2 == 0 && numberCards >= 4 && numberCards <= 14) {
//         numberCards = numberCards / 2
//         for (let i = 0; i < numberCards; i++) {
//             backgroundGifIndice()
//             for (let i = 0; i < 2; i++) {
//                 document.querySelector(".tableCards").innerHTML += `<div class="card new" onclick="turn(this)"><img src="/src/img/${nameGif}.gif"</div>`;
//                 playCards.push(cards[i]);
//             }
           
//         }
        
//     }
//     playCards = playCards.sort(comparador);
// }

// start()