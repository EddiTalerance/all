let b = {}


const table = document.querySelector('#table-3x4');
const in1 = document.querySelector('#input-1');
const in2 = document.querySelector('#input-2');
const in3 = document.querySelector('#input-3');
const in4 = document.querySelector('#input-4');
const btn = document.querySelector('#fill-btn');

btn.addEventListener('click', () => {
    const row = document.createElement('tr');
    
    b.a = in1.value;
    b.b = in2.value;
    b.c = in3.value;
    b.d = in4.value;
    const values = Object.values(b)
    
    for (let i = 0; i < Object.keys(b).length; i++) {
        const cell = document.createElement('td');
        cell.innerHTML = values[i];
        row.appendChild(cell);
    }
    table.appendChild(row);

    in1.value = innerHTML = '';
    in2.value = innerHTML = '';
    in3.value = innerHTML = '';
    in4.value = innerHTML = '';
});



