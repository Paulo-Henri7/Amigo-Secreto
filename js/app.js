let listaAmigosGeral = [];
let listaAmigosEmbaralhada = [];
function adicionar() {
    let amigo = document.getElementById("nome-amigo").value;
    document.getElementById("nome-amigo").value = "";

    if (amigo == "") {
        alert("Digite o nome de um amigo");
        return;
    }

    if (listaAmigosGeral.includes(amigo)) {
        alert("Esse amigo já foi colocado");
        return;
    } else {
        listaAmigosGeral.push(amigo)
    }

    let amigoAdicionado = document.getElementById("lista-amigos");
    amigoAdicionado.textContent = listaAmigosGeral;
}

function sortear() {
    if (listaAmigosGeral.length < 4) {
        alert("ERRO, sorteio disponivel apenas com 4 participantes");
        return;
    }
    listaAmigosEmbaralhada = embaralha(listaAmigosGeral);
    console.log(listaAmigosEmbaralhada);
    let listaSorteio = document.getElementById("lista-sorteio")

    for (let i = 0; i < listaAmigosEmbaralhada.length; i++) {
        if (i == listaAmigosEmbaralhada.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigosEmbaralhada[i] + "--->" + listaAmigosEmbaralhada[0] + "<br>";
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigosEmbaralhada[i] + "--->" + listaAmigosEmbaralhada[i + 1] + "<br>";
        }
    }
}

function embaralha(listaAmigosGeral) {

    for (let indice = listaAmigosGeral.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [listaAmigosGeral[indice - 1], listaAmigosGeral[indiceAleatorio]] =
            [listaAmigosGeral[indiceAleatorio], listaAmigosGeral[indice - 1]];
    }
    return listaAmigosGeral;
}
function reiniciar() {
    listaAmigosGeral = [];
    listaAmigosEmbaralhada = [];
    let vazio1 = document.getElementById("lista-sorteio");
    document.getElementById("nome-amigo").value = "";
    let vazio = document.getElementById("lista-amigos");
    vazio.innerHTML = "";
    vazio1.innerHTML = "";

}