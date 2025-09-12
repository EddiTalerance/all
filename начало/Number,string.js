const a = 10;

console.log(Boolean(a)); //Любое значение отличное от нуля, даже текст, выведет true

const number = 23; //приведение к строке

const s1 = String(number);
const s2 = "" + number;
const s3 = `${number}`;

console.log(typeof s1, s1);
console.log(typeof s2, s2);
console.log(typeof s3, s3);

//Number

const string = "12";
const text = "lorem"
const number1 = Number(string); //переводит строку в число
const number2 = +string; //так же переводит в число
const number3 = Number(text);

console.log(typeof number1, number1);
console.log(typeof number2, number2);
console.log(typeof number3, number3); //выводится NaN Not a number