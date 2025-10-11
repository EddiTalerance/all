const book = {
    title: 'Война и мир',
    autor: 'Лев Толстой'
}

localStorage.setItem('book', book);

const car = {
    model: 'Audi',
    year: '2002'
}

localStorage.setItem('car',JSON.stringify(car))  //трансформирование локалсторедж в строку

const tab = JSON.parse(localStorage.getItem('tab1'));  //Трансформация обратно в объект
