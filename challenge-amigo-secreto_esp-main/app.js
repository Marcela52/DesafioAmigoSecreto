// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

let amigos = [];

function agregarAmigo() {
    let nombre = amigo.value.trim(); // Elimina espacios al inicio y al final

    // Expresión regular que solo permite letras y espacios, pero no solo espacios
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre === '' || !regex.test(nombre) || /^\s+$/.test(nombre)) {
        alert('Por favor, inserte un nombre válido');
        return;
    }

    amigos.push(nombre);
    amigo.value = ''; // Limpiar el campo de entrada
    mostrarAmigos();
    console.log(amigos);
}


function mostrarAmigos() {
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo) => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, inserte un amigo');
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    listaAmigos.innerHTML = '';
    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
}