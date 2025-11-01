const text1 = document.querySelector('#text');
const text2 = document.querySelector('#text2');
const number = document.querySelector('#number');
const textAll = document.querySelector('#text-all');
const btn = document.querySelector('#number');
const form = document.querySelector('#form');

const arr = [];

addArr => [
    {title1: `${text1}`,
    title2: `${text2}`},
    textAll
]


form.addEventListener('submit', (e) => {
    e.preventDefault();
    textAll.value += text1.value;
    textAll.value += ' ';
    textAll.value += text2.value;
    textAll.value += ' ';
    textAll.value += number.value;
    console.log(addArr);
})