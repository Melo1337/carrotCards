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
let primeiraCarta = '';
let segundaCarta = '';
let jogadas = 0;
let segundos = 0;
let tempo = null;
let intervalo;
let jogadasHTML = document.getElementsByClassName('contador')[0];
let cronometroHTML = document.getElementsByClassName('cronometro')[0]

start()

function comparador() {
    return Math.random() - 0.5;
}

function start() {
    if (numberCards % 2 == 0 && numberCards >= 4 && numberCards <= 14) {
        renderizarBaralho()
        cronometro()
    } else {
        while (!(numberCards % 2 === 0 && numberCards >= 4 && numberCards <= 14)) {
            numberCards = prompt("Erro, tente novamente. Insira um número par de 4 a 14");
        }
        renderizarBaralho()
    }
}

function renderizarBaralho() {

    for (let i = 0; i < numberCards / 2; i++) {
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

function verificarCartas() {
    let className1 = primeiraCarta.className
    let className2 = segundaCarta.className

    if (className1 === className2) {

        primeiraCarta.classList.add('virada')
        segundaCarta.classList.add('virada')

        primeiraCarta = '';
        segundaCarta = '';

    } else {

        setTimeout(() => {
            primeiraCarta.classList.remove('virada')
            segundaCarta.classList.remove('virada')

            primeiraCarta = '';
            segundaCarta = '';
        }, 500);
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
        contador()
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
            pausar()
            reiniciar()
        }, 500);

    }
}

function contador() {
    jogadasHTML.innerHTML++
    jogadas++
}

function cronometro() {
    if (!intervalo) {
        intervalo = setInterval(atualizarCronometro, 1000);
    }
}

function atualizarCronometro() {
    segundos++;
    const formatarNumero = (numero) => numero < 10 ? '0' + numero : numero;
    cronometroHTML.innerHTML = `${formatarNumero(segundos)}`;
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciar() {
    
    let perguntaFinal = prompt(`Voce terminou com ${jogadas} jogadas e ${segundos} segundos, que jogar de novo?`);

    if (perguntaFinal === 'sim') {
        jogadas = 0;
        segundos = 0;
        jogadasHTML.innerHTML = '0';
        for (let i=0; i<baralho.length; i++) {
            document.querySelector(".card").remove();
        }
        baralho = [];
        
        numberCards = prompt("Escolha a quantidade de cartas, numeros pares de 4 a 14");
        start()
    
    } else if (perguntaFinal === 'nao') {
        console.log('nao')
    } else {
        reiniciar()
    }

}