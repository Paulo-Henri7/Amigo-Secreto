let listaAmigos = [];
function adicionar() {
    addAmigo();
}

function addAmigo() {
    let amigos = document.getElementById("nome-amigo");
    if (amigos.value === "") {
        alert("Erro, campo vazio ou nome repetido.");
        return;
    }
    
    if(listaAmigos.includes(amigos.value) ){
       alert("Nome já adicionado, tente escreve-lo de outra forma");
       return; 
    }
    
    listaAmigos.push(amigos.value);
    amigos.value = "";
    console.log(listaAmigos);
    mostraAmigos = document.getElementById("lista-amigos");
    mostraAmigos.innerHTML = listaAmigos;
}

function sortear() {
    if (listaAmigos.length <= 3) {
        alert("Sorteio disponivel apenas com 4 ou mais pessoas");
        return;
    }
    embaralha(listaAmigos);
    let sorteados = document.getElementById("lista-sorteio");
    for (let i = 0; i < listaAmigos.length; i++) {
        if (i == listaAmigos.length - 1) {
            sorteados.innerHTML += listaAmigos[i] + " ----> " + listaAmigos[0] + "<br>";
        } else {
            sorteados.innerHTML += listaAmigos[i] + " ----> " + listaAmigos[i + 1] + "<br>";
        }
    }
}

function reiniciar() {
    listaAmigos = [];
    mostraAmigos = document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}

function embaralha(listaAmigos) {
    for (let indice = listaAmigos.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [listaAmigos[indice - 1], listaAmigos[indiceAleatorio]] =
            [listaAmigos[indiceAleatorio], listaAmigos[indice - 1]];
    }
}