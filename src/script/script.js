let numberCards = prompt("Escolha a quantidade de cartas, numeros pares de 4 a 14")

function start() {

    if (numberCards < 4 || numberCards > 14) {
        for (let i = 0; numberCards % 2 != 0; i++) {
            numberCards = prompt("Escolha a quantidade de cartas, numeros pares de 4 a 14")
        }
    } else {
        let container = document.getElementsByClassName("tableCards");

        let imgSrc = ["./src/img/bobrossparrot.gif", "./src/img/explodyparrot.gif", "./src/img/fiestaparrot.gif", "./src/img/metalparrot.gif", "./src/img/revertitparrot.gif", "./src/img/tripletsparrot.gif"];

        for (let i = 0; i < numberCards; i++) {

            let indiceAleatorio = Math.floor(Math.random() * imgSrc.length);
            let srcAleatorio = imgSrc[indiceAleatorio]

            let novaDiv = document.createElement("div");
            novaDiv.classList.add("card");
            container[0].appendChild(novaDiv).innerHTML = `<img src="${srcAleatorio}" />`;
        }
    }

}
start()