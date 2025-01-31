// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Crea una matriz para almacenar los nombres
let amigos = [];
let amigosSorteados = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturando el valor del campo de entrada
    let nombreAmigo = document.getElementById('amigo').value;

    // Validando la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizando la matriz de amigos
    amigos.push(nombreAmigo);

    // Limpiando el campo de entrada
    document.getElementById('amigo').value = "";

    // Actualizando la lista de amigos
    actualizarListaAmigos();
}

// Implementa una función para actualizar la lista de amigos
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Implementa una función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = "El amigo sorteado es: " + amigoSorteado;

    // Eliminar el amigo sorteado del array y agregarlo a la lista de sorteados
    amigos.splice(indiceAleatorio, 1);
    amigosSorteados.push(amigoSorteado);

    // Actualizar la lista de amigos
    actualizarListaAmigos();
}