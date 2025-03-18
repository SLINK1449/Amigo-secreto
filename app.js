// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push (nombre);
        mostrarlista()
        input.value = '';
    }else {

            alert ('Ingresa tu puto nombre sapo');
        }
}


function mostrarlista(){

    const lista = document.getElementById ('listaAmigos');
    lista.innerHTML = ''; 


    amigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        item.className = 'name-item';
        const color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        item.style.backgroundColor = color;

        lista.appendChild(item);
      });
  }





function sortearAmigo(){

    if (amigos.length === 0) {
        alert('No haz escrito nada');
        return;
      }
    
      const indice = Math.floor(Math.random() * amigos.length);
      const amigoSorteado = amigos[indice];
    
      const resultado = document.getElementById('resultado');
      resultado.innerHTML = `<li class="result-item">El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
      
}


function limpiarmenu(){
    const lista = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');

    lista.innerHTML = '';     // Limpia la lista de amigos
    resultado.innerHTML = ''; // Limpia el resultado del sorteo
    amigos = [];              // Vacía el array de amigos
}

function limpiarFormulario(){
    limpiarmenu();
}