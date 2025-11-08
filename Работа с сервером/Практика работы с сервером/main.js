function handleFormSubmit(e) {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const releaseYear = document.querySelector('#releaseYear').value;
    const isWatched = document.querySelector('#isWatched').checked;

    const film = {
        title,
        genre,
        releaseYear,
        isWatched
    }

    addFilm(film);
}

async function addFilm(film) {
    await fetch('https://sb-film.skillbox.cc/films', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            email: 'edditalerance@gmail.com'
        },
        body: JSON.stringify(film),
    })

    renderTable()
}

async function renderTable() {
    const responce = await fetch('https://sb-film.skillbox.cc/films', {
        headers: {
            email: 'edditalerance@gmail.com'
        }
    })

    const films = await responce.json();

    const filmTableBody = document.querySelector('#film-tbody');
    filmTableBody.innerHTML= '';

    films.forEach((film) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${film.title}</td>
        <td>${film.genre}</td>
        <td>${film.releaseYear}</td>
        <td>${film.isWatched ? 'Да' : 'Нет'}</td>
        `
        filmTableBody.appendChild(row)
    })
}

document.querySelector('#film-form').addEventListener('submit', handleFormSubmit);

renderTable()