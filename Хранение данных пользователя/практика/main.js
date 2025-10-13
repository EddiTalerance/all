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
    films.forEach((film, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched ? "Да" : "Нет"}</td>
            <td>
            <button class='edit' data-index='edit-${index}'>Редактировать</button>
            <button class='delete' data-index='delete-${index}'>Удалить</button>
            </td>
        `;
        filmTableBody.appendChild(row);
    })
}

// forEach((films, index) => {
//     const edit= document.getElementsByClassName('.edit');
//     edit.addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log(JSON.stringify(localStorage.getItem('films')));
//     })
// });


const deleteFilm = document.querySelector('.delete');

document.querySelector('#film-form').addEventListener('submit', handFormSubmit)

renderTable()