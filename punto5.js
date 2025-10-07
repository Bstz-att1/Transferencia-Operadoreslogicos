// Solicitar la nota final al usuario
let nota = parseFloat(prompt("Ingrese la nota final:"));

// Solicitar el porcentaje de asistencia al usuario
let asistencia = parseFloat(prompt("Ingrese el porcentaje de asistencia:"));

// Verificar si aprueba la materia
if (nota >= 60 && asistencia >= 80) {
    alert("Aprobado");
} else {
    alert("Reprobado");
}
