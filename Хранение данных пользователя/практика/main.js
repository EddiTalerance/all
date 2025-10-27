

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

    addFilmToLocalStorage(film)
}

function addFilmToLocalStorage(film) {
    const films = JSON.parse(localStorage.getItem('films')) || [];
    films.push(film);
    localStorage.setItem('films', JSON.stringify(films));

    renderTable();
}

function renderTable() {
    const films = JSON.parse(localStorage.getItem('films')) || [];

    const filmTableBody = document.querySelector('#film-tbody');

    filmTableBody.innerHTML = '';
    films.forEach((film) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched ? "Да" : "Нет"}</td>
            <td>
            <button class="edit"">Редактировать</button>
            <button class="delete">Удалить</button>
            </td>
        `;

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

        releaseYear.addEventListener('invalid', (e) => {
            if (releaseYear.validity.valueMissing) {
                e.target.setCustomValidity('Введите год фильма');
            } 
            else if (isNaN(Number(releaseYear.value))) {
                e.target.setCustomValidity('Должно быть число');
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

        filmTableBody.appendChild(row);
    })
}


document.addEventListener('DOMContentLoaded', () => {
    const deleteFilm = document.querySelectorAll('.delete');
    const editFilm = document.querySelectorAll('.edit');

    deleteFilm.forEach((e, i) => {
        e.addEventListener('click', () => {
            const films = JSON.parse(localStorage.getItem('films'))
            films.splice(i, 1);
            localStorage.setItem('films', JSON.stringify(films));
            renderTable()
        });
    });

    editFilm.forEach((e, i) => {
        e.addEventListener('click', () => {
            const films = JSON.parse(localStorage.getItem('films'))
            let title = document.querySelector('#title');
            let genre = document.querySelector('#genre');
            let releaseYear = document.querySelector('#releaseYear');
            let isWatched = document.querySelector('#isWatched');

            title.value = films[i].title;
            genre.value = films[i].genre;
            releaseYear.value = films[i].releaseYear;
            if (films[i].isWatched === true) {
                isWatched.checked = true;
            }else{
                isWatched.checked = false;
            }

            films.splice(i, 1);
            localStorage.setItem('films', JSON.stringify(films));
        })
    })
    
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
});




document.querySelector('#film-form').addEventListener('submit', handFormSubmit)

renderTable()