let b = {
    a: null,
    b: null,
    c: null,
    d: null
}

b.a = 3;
console.log(b)

const table = document.querySelector('#table-3x4');
const cells = table ? table.querySelectorAll('td') : [];
const in1 = document.querySelector('#input-1');
const in2 = document.querySelector('#input-2');
const in3 = document.querySelector('#input-3');
const in4 = document.querySelector('#input-4');
const btn = document.querySelector('#fill-btn');

btn.addEventListener('click', () => {
    b.a = in1.value;
    b.b = in2.value;
    b.c = in3.value;
    b.d = in4.value;
    console.log(b)
});



