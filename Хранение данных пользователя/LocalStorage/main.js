localStorage.setItem('name', 'Andrey');  //добавление нового ключ-значение

const name = localStorage.getItem('name');  //передача данных в переменную

console.log(name);

localStorage.removeItem('name');  //удаление ключа

localStorage.setItem('name', 'Ivan');

console.log(name);

localStorage.clear  //очистка всех данных