
var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

var intentos = 0;
var vida = 5;
var adivinanza = false;

while (!adivinanza && intentos < vida) {
    var numeroUser = prompt("Adivina el número entre 1 y 10. Tienes " + (vida - intentos) + " intentos restantes:");

    numeroUser = parseInt(numeroUser);

    intentos++;

    if (numeroUser === numeroAleatorio) {
        alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
        adivinanza = true; 
    } else if (numeroUser < numeroAleatorio) {
        alert("El número es mayor, intenta de nuevo.");
    } else {
        alert("El número es menor, intenta de nuevo.");
    }
}

if (!adivinanza) {
    alert("¡Se acabaron los intentos! El número era " + numeroAleatorio + ".");
}
