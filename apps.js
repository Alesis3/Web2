var num1 = prompt("Ingrese el numero 1");
var num2 = prompt("Ingrese el numero 2");
var num3 = prompt("Ingrese el numero 3");

if (num1 == num2 && num1 == num3) {
    alert("Los tres números son iguales");
} else if (num1 == num2) {
    alert("El numero 1 y el numero 2 son iguales");
} else if (num2 == num3) {
    alert("El numero 2 y el numero 3 son iguales");
} else if (num1 == num3) {
    alert("El numero 1 y el numero 3 son iguales");
} else if (num1 > num2 && num1 > num3) {
    alert("El numero 1 es mayor");
} else if (num2 > num1 && num2 > num3) {
    alert("El numero 2 es mayor");
} else {
    alert("El numero 3 es mayor");
}
