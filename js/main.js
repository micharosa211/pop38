function zad(num1, num2) {
    if (num1 + num2 > 0) {
        return "Wynik dodawania wynosi " + (num1 + num2);
    }
    else {
        return "Wynik jest nieprawidłowy";
    }
    if (num1 - num2 > 0) {
        return "Wynik odejmowania wynosi " + (num1 - num2);
    }
    else {
        return "Wynik jest nieprawidłowy";
    }
    if (num1 * num2 > 0) {
        return "Wynik mnożenia wynosi " + (num1 * num2);
    }
    else {
        return "Wynik jest nieprawidłowy";
    }
    

}

console.log(zad(5, 5));
