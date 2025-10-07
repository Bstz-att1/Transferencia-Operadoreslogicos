// Solicitar datos al usuario
let edad = parseInt(prompt("Ingrese su edad:"));
let esEstudiante = prompt("¿Es estudiante? (si/no):").toLowerCase() === "si";

let precioBase;// variable para determinar el precio base de la entrada

    if (edad < 12) { // si es menor de 12 se le aplica este precio
        precioBase = 5000;
    } else if (edad >= 12 && edad <= 18) { //si es mayor de 12 o tiene 12 pero menor de 18 o tiene 18este precio
        precioBase = 8000;
    } else {
        precioBase = 10000; //cualquier otro caso se aplica este caso 
    }

    if (esEstudiante) {
        precioBase *= 0.8; // Aplicar descuento del 20% si es estudiante
    } 

alert("El precio de la entrada es: " + precioBase);

// La estructura condicional que use para resolver el caso fue if - else if - else,
// porque me deja especificar mas que cambios se realizan bajo ciertas condiciones