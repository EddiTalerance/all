let counter = 2
let number = 3

counter++ //counter = counter + 1 Инкримент
counter-- //counter = counter - 1 Дикримент

console.log(counter);
console.log(counter++); //выведет 2, потому что в консоли выводится сначала переменная, а потом прибавляется 1
console.log(++counter); //при такой записи сначала увеличивается на 1, а потом выводится

number++
console.log(number);

++number
console.log(number);

let currentYears = 2025

let studentName = prompt("Введите ваше имя")
let year = prompt("Введите год рождения")
let height = prompt("Введите ваш рост")
let weight = prompt("Введите ваш вес")

let age = currentYears - year
let IMT = weight / (height * height)

alert(studentName, "возраст:", age, "рост:", height, "вес:", weight, "Ваш индекс массы тела равен", IMT)