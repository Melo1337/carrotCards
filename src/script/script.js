let cards = document.querySelectorAll(".card");
let numberCards = prompt("Escolha a quantidade de cartas, numeros pares de 4 a 14")
let playCards = [];
const backgroundGifs = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot',
];

function backgroundGifIndice() {
    const randomIndex = Math.floor(Math.random() * backgroundGifs.length);
    indexGif = backgroundGifs[randomIndex];
    return indexGif
}


function comparador() {
    return Math.random() - 0.5;
}

function start() {
    if (numberCards % 2 == 0 && numberCards >= 4 && numberCards <= 14) {
        numberCards = numberCards / 2
        for (let i = 0; i < numberCards; i++) {
            backgroundGifIndice()
            for (let i = 0; i < 2; i++) {
                document.querySelector(".tableCards").innerHTML += `<div class="card new" onclick="turn(this)"><img src="/src/img/${indexGif}.gif"</div>`;
            }
            playCards.push(cards[i]);
        }
        playCards = playCards.sort(comparador);
    }
}

start()