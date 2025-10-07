// Solicitar un número entero al usuario
let num = parseInt(prompt("Ingrese un número entero:"));

// Verificar si es positivo, negativo o cero
let mensaje = "";
if (num > 0) {
    mensaje = "Número positivo";
} else if (num < 0) {
    mensaje = "Número negativo";
} else {
    mensaje = "Cero";
}

// Extensión: verificar si es par o impar
if (num % 2 === 0) {
    mensaje += " y par";
} else {
    mensaje += " e impar";
}

// Mostrar el mensaje
alert(mensaje);

//asi cambiaria la resolucion si se quisiera que tambien verificara si es par o impar