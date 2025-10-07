let usuario = prompt("Ingrese su nombre de usuario");
let contraseña = prompt("Ingrese su contraseña");

if (usuario === "admin" && contraseña === "1234") {
    alert("Acceso concedido");
} else {
    alert("Acceso denegado");
}