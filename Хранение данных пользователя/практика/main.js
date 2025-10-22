const selectSort = document.querySelector('#select-sort-films');
const btnSort = document.querySelector('#btn-sort-films');

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
        row.setAttribute('data-index', `${index}`)
        row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched ? "Да" : "Нет"}</td>
            <td>
            <button class='edit' data-index="${index}">Редактировать</button>
            <button class='delete' data-index="${index}">Удалить</button>
            </td>
        `;
        
        filmTableBody.appendChild(row);
    })

    
}

document.addEventListener('DOMContentLoaded', () => {
    const deleteFilm = document.querySelectorAll('.delete');
    const editBtn = document.querySelectorAll('.edit');


    deleteFilm.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const clickIndex = e.currentTarget.getAttribute('data-index');
            let arrFilms = JSON.parse(localStorage.getItem('films'));
            arrFilms.splice(clickIndex, 1);
            localStorage.setItem('films', JSON.stringify(arrFilms));
            localStorage.getItem('films');

            document.querySelector(`tr[data-index="${clickIndex}"]`).remove();

            renderTable();
        })
    })

    editBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const title = document.querySelector('#title');
            const genre = document.querySelector('#genre');
            const releaseYear = document.querySelector('#releaseYear');
            const isWatched = document.querySelector('#isWatched');

            const clickIndex = e.currentTarget.getAttribute('data-index');
            let arrFilms = JSON.parse(localStorage.getItem('films'));
            let item = arrFilms[clickIndex];

            title.value = item.title;
            genre.value = item.genre;
            releaseYear.value = item.releaseYear;

            if (item.isWatched === true) {
                isWatched.checked = true;
            }else{
                isWatched.checked = false;
            }
            
            // document.querySelector('#film-form').addEventListener('submit', () => {
            //     e.preventDefault();
            //     arrFilms.splice(clickIndex, 1);
            //     localStorage.setItem('films', JSON.stringify(arrFilms))
            //     // document.querySelector(`tr[data-index="${clickIndex}"]`).remove();
            // })
        })
        renderTable();
    })
})

btnSort.addEventListener('click', (e) => {
    e.preventDefault();
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
})


document.querySelector('#film-form').addEventListener('submit', handFormSubmit)

renderTable()