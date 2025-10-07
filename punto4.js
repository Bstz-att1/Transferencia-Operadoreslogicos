let opcion = prompt("Selecciona una opción:\n1. Consultar saldo\n2. Retirar dinero\n3. Depositar dinero\n4. Salir");
// el menu para seleccionar que accion quiere realizar el usuario

switch (opcion) {
    case '1':
        alert("Acción: Consultar saldo");// si el ususario ingresa el numero 1 se realizara esta acccion
        break;
    case '2':
        alert("Acción: Retirar dinero");// si el ususario ingresa el numero 2 se realizara esta acccion
        break;
    case '3':
        alert("Acción: Depositar dinero");// si el ususario ingresa el numero 3 se realizara esta acccion
        break;
    case '4':
        alert("Acción: Salir");// si el ususario ingresa el numero 4 se realizara esta acccion
        break;
    default:
        alert("Opción no válida");// si el ususario ingresa el numero 5 se realizara esta acccion
}
// si el usuario ingresa un numero que no este en el menu saltara el default que dice que no es una opcion valida