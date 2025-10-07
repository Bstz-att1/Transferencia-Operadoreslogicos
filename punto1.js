let usuario = prompt("Ingrese su nombre de usuario"); // solicita el nombre de usuario
let contraseña = prompt("Ingrese su contraseña"); // solicita la contraseña del usuario

// verifica si el usuario y la contraseña son correctos

if (usuario === "admin" && contraseña === "1234") { // ambas condiciones deben ser verdaderas para conceder acceso
    alert("Acceso concedido"); // muestra un mensaje de acceso concedido si las credenciales son correctas
} else {
    alert("Acceso denegado"); // muestra un mensaje de acceso denegado si alguna de las credenciales es incorrecta
}

//el operador logico que use fue el AND (&&) porque ambas condiciones deben ser verdaderas para que se conceda el acceso.