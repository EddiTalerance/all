let editIndex = -1;
let title, genre, releaseYear, isWatched;
const addBtn = document.querySelector('#add-btn');
const cancel = document.querySelector('#cancel-edit');
let index;

function clearForm() {
    title.value = '';
    genre.value = '';
    releaseYear.value = '';
    isWatched.checked = false;
}

cancel.addEventListener('click', () => {
    clearForm();
    addBtn.innerHTML = 'Добавить';
    cancel.classList.add('hidden');
    editIndex = -1;
    console.log(index);
})

document.addEventListener('DOMContentLoaded', () => {
    const filmTableBody = document.querySelector('#film-tbody');
    title = document.querySelector('#title');
    genre = document.querySelector('#genre');
    releaseYear = document.querySelector('#releaseYear');
    isWatched = document.querySelector('#isWatched');


     title.addEventListener('invalid', (e) => {
            if (title.validity.valueMissing) {
                e.target.setCustomValidity('Введите название фильма');
            } else {
                e.target.setCustomValidity('');
            }
        })

        genre.addEventListener('invalid', (e) => {
            if (genre.validity.valueMissing) {
                e.target.setCustomValidity('Введите жанр фильма');
            } else {
                e.target.setCustomValidity('');
            }
        })

        releaseYear.addEventListener('blur', (e) => {
            const value = e.target.value;
            const isValid = /^\d{4}$/.test(value);

            if (value.length === 0) {
                e.target.setCustomValidity('Введите год фильма');
            } 
            else if (!isValid) {
                e.target.setCustomValidity('Должно быть 4 цифры');
            } else {
                e.target.setCustomValidity('');
            }
        })

        title.addEventListener('input', (e) => {
            e.target.setCustomValidity('');
        })

        genre.addEventListener('input', (e) => {
            e.target.setCustomValidity('');
        })

        releaseYear.addEventListener('input', (e) => {
            e.target.setCustomValidity('');
        })


    filmTableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            const index = e.target.dataset.index;
            deleteFilm(index);
        } else if (e.target.classList.contains('edit')) {
            const index = e.target.dataset.index;
            editFilm(index);
            addBtn.innerHTML = 'Обновить';
            cancel.classList.remove('hidden');
        }
    })

    function deleteFilm(index) {
        let films = JSON.parse(localStorage.getItem('films'))
        films.splice(index, 1);
        localStorage.setItem('films', JSON.stringify(films))
        if (editIndex === index) {
            editIndex = -1;
        } else if (editIndex > index) {
            editIndex--;
        }
        renderTable();
    }

});

function handFormSubmit(e) {
    e.preventDefault()

    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const releaseYear = document.querySelector('#releaseYear').value;
    const isWatched = document.querySelector('#isWatched').checked;


    const film = {
        title,
        genre,
        releaseYear,
        isWatched,
    }
    addBtn.innerHTML = 'Добавить';

    clearForm();
    cancel.classList.add('hidden');
    addFilmToLocalStorage(film);
}

function addFilmToLocalStorage(film) {
    let films = JSON.parse(localStorage.getItem('films')) || [];

    if (editIndex !== -1) {
        films[editIndex] = film;
        editIndex = -1;
    } else {
        films.push(film);
    }

    localStorage.setItem('films', JSON.stringify(films));
    renderTable();
}

function renderTable() {
        const films = JSON.parse(localStorage.getItem('films')) || [];

        const filmTableBody = document.querySelector('#film-tbody');

        filmTableBody.innerHTML = '';
        films.forEach((film, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${film.title}</td>
                <td>${film.genre}</td>
                <td>${film.releaseYear}</td>
                <td>${film.isWatched ? "Да" : "Нет"}</td>
                <td>
                <button class="edit" data-index="${index}">Редактировать</button>
                <button class="delete" data-index="${index}">Удалить</button>
                </td>
            `;

            filmTableBody.appendChild(row);
        })
    }

function editFilm(index) {
    const films = JSON.parse(localStorage.getItem('films'));
    if (index < 0 || index >= films.length) {
        editIndex = -1;
        return
    }

    editIndex=index;
    title.value = films[index].title;
    genre.value = films[index].genre;
    releaseYear.value = films[index].releaseYear;
    if (films[index].isWatched === true) {
        isWatched.checked = true;
    } else {
        isWatched.checked = false;
    }
}

const btnSort = document.querySelector('#btn-sort-films');
const selectSort = document.querySelector('#select-sort-films');

btnSort.addEventListener('click', (e) => {
    const sortBy = selectSort.value;

    let films = JSON.parse(localStorage.getItem('films')) || [];

    if (sortBy === 'Название') {
        films.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0
        });
    }

    else if (sortBy === 'Жанр') {
        films.sort((a, b) => {
            if (a.genre < b.genre) return -1;
            if (a.genre > b.genre) return 1;
            return 0
        });
    }

    else if (sortBy === 'Год') {
        films.sort((a, b) => {
            if (a.releaseYear < b.releaseYear) return -1;
            if (a.releaseYear > b.releaseYear) return 1;
            return 0
        });
    }

    localStorage.setItem('films', JSON.stringify(films));
    renderTable();
});




document.querySelector('#film-form').addEventListener('submit', handFormSubmit)

renderTable()