function pow(n) {
    const a = n * n;
    return a; //для для присвоения результата этой функции для дальнейшей передачи его использования. Так же после return код больше не выполняется.
}

pow(3);

console.log(pow(3));

function returnIf(a, b) {
    if (a > b) {
        return "A больше Б"
    } else {
       return "Б больше или равна А"
    }
}

const result = returnIf(10, 7);

console.log(result);