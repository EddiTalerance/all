function checkAge(age) {
    age < 18 ? console.log("Несовершеннолетний") : console.log("Совершеннолетний");
}

checkAge(17);


function sum(a = 0, b = 0, c = 0) { //хорошей практикой является задавать параметры по умолчанию на случай если какой-то параметр при вызове функции не будет прописан
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    } else {
        console.log("Неверные параметры");
    }
}

sum(5, 3, 9);