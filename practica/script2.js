// Practica 2
/* Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!". */

let diaDeSemana = prompt("¿Qué día de la semana es hoy?");

if (diaDeSemana === "Domingo" && diaDeSemana === "Sabado") {
    alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}


/* Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
 */
let numeroUsuario = prompt("Indica un número y te diré si es positivo o negativo");

if (numeroUsuario >= 0){
    alert(`Tu número: ${numeroUsuario}, es un número positivo`);
} else {
    if (numeroUsuario <=0){
        alert(`Tu número: ${numeroUsuario}, es un número negativo`);
    }
}


/* Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
 */

let puntuacionJuego = prompt("¡Juguemos! Escribe un número del 1 al 150")

if(puntuacionJuego >= 100){
alert("¡Felicidades, has ganado!");
}else{
alert("Intenta nuevamente para ganar");
} 


/* Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo. */
 let saldoCuenta = 100;

alert(`El saldo de su cuenta es: ${saldoCuenta}`); 


/* Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre. */
let nombreUsuario = prompt("¡Hola! ¿Cuál es tu nombre?");

alert(`¡Bienvenido/a, ${nombreUsuario}!`);

