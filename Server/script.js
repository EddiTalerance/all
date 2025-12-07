
let title, genre, releaseYear, isWatched;
const filterTitle = document.querySelector('#filter__title');
const filterGenre = document.querySelector('#filter__genre');
const filterRelease = document.querySelector('#filter__releaseYear');
const filterSelect = document.querySelector('#select');

function variables() {
  title = document.getElementById("title");
  genre = document.getElementById("genre");
  releaseYear = document.getElementById("releaseYear");
  isWatched = document.getElementById("isWatched");
}

variables();

function clearForm() {
  title.value = '';
  genre.value = '';
  releaseYear.value = '';
  isWatched.checked = false;
}



function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const isWatched = document.getElementById("isWatched").checked;

  const film = {
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched,
  };

  addFilm(film);
  clearForm();
}

async function addFilm(film) {

  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "edditalerance@gmail.com",
    },
    body: JSON.stringify(film),
  });
  renderTable();
}

async function renderTable() {
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    headers: {
      email: "edditalerance@gmail.com",
    },
  });
  const films = await filmsResponse.json();

  const filmTableBody = document.getElementById("film-tbody");

  filmTableBody.innerHTML = "";

  films.forEach((film, index) => {

    const row = document.createElement('tr');
    row.dataset.id = `${film.id}`;
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td><button class="btn-del" data-id="${film.id}">Удалить</button>
    `;
    filmTableBody.appendChild(row);
  });
}

async function deleteFilm() {
  
  const filmTableBody = document.getElementById("film-tbody");
  filmTableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-del')) {
      const index = e.target.dataset.id;
      e.target.closest('tr').remove();
      deleteFilmServer(index)
    }
  })
}

async function deleteFilmServer(index) {
  const response = await fetch(`https://sb-film.skillbox.cc/films/${index}`, {
        method: 'DELETE',
        headers: {
            email: 'edditalerance@gmail.com'
        }
    })
    const data = await response.json();
}

document.getElementById("delete-all").addEventListener('click', () => {
  async function deleteAllFilms() {
    const response = await fetch('https://sb-film.skillbox.cc/films/', {
      method: 'DELETE',
      headers: {
        email: 'edditalerance@gmail.com'
      }
    })
    const data = await response.json();
    document.getElementById("film-tbody").innerHTML = '';
  }
  deleteAllFilms();
})

// function validForm() {
//   console.log('hello')
//   title.addEventListener('invalid', (e) => {
//             if (title.validity.valueMissing) {
//                 e.target.setCustomValidity('Введите название фильма');
//             } else {
//                 e.target.setCustomValidity('');
//             }
//         })

//         genre.addEventListener('invalid', (e) => {
//             if (genre.validity.valueMissing) {
//                 e.target.setCustomValidity('Введите жанр фильма');
//             } else {
//                 e.target.setCustomValidity('');
//             }
//         })

//         releaseYear.addEventListener('blur', (e) => {
//             const value = e.target.value;
//             const isValid = /^\d{4}$/.test(value);

//             if (value.length === 0) {
//                 e.target.setCustomValidity('Введите год фильма');
//             } 
//             else if (!isValid) {
//                 e.target.setCustomValidity('Должно быть 4 цифры');
//             } else {
//                 e.target.setCustomValidity('');
//             }
//         })

//         title.addEventListener('input', (e) => {
//             e.target.setCustomValidity('');
//         })

//         genre.addEventListener('input', (e) => {
//             e.target.setCustomValidity('');
//         })

//         releaseYear.addEventListener('input', (e) => {
//             e.target.setCustomValidity('');
//         })
// }



document.addEventListener('DOMContentLoaded', () => {

function checkTable(delay = 1000) {
    setTimeout(() => {
      const rows = document.querySelectorAll('#film-tbody tr');
      
      if(rows.length > 0) {
        filterFilms();
        }else{
          const nextDelay = Math.min(delay * 1.5, 5000);
          checkTable(nextDelay);
        }
    }, delay);
}

checkTable();

  const filmTableBody = document.getElementById("film-table");

  function filterFilms() {
      const headers = Array.from(filmTableBody.querySelectorAll('thead th'))
      .map(th => th.textContent.trim())
      .slice(0, -1);

      console.log(headers);

      const rows = document.querySelectorAll('#film-tbody tr');
      const result = [];

      rows.forEach(row => {
        const cells =row.querySelectorAll('td');
        const obj = {};

        headers.forEach((header, index) => {
          let value = cells[index].textContent.trim();
          obj[header] = value; 
        });
        result.push(obj)
      })
      return result;
  }
  filterFilms()
})


document
.getElementById("film-form")
.addEventListener("submit", handleFormSubmit);

renderTable();
deleteFilm()

// // Функция фильтрации фильмов
// function filterFilms(films) {
//   const titleFilter = filterTitle.value.toLowerCase();
//   const genreFilter = filterGenre.value.toLowerCase();
//   const releaseFilter = filterRelease.value;
//   const watchedFilter = filterSelect.value;

//   return films.filter(film => {
//     const matchesTitle = film.title.toLowerCase().includes(titleFilter);
//     const matchesGenre = film.genre.toLowerCase().includes(genreFilter);
//     const matchesRelease = film.releaseYear.toString().includes(releaseFilter);
    
//     let matchesWatched = true;
//     if (watchedFilter === "Да") {
//       matchesWatched = film.isWatched === true;
//     } else if (watchedFilter === "Нет") {
//       matchesWatched = film.isWatched === false;
//     }

//     return matchesTitle && matchesGenre && matchesRelease && matchesWatched;
//   });
// }

// // Обновленная функция renderTable с фильтрацией
// async function renderTable() {
//   const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
//     headers: {
//       email: "edditalerance@gmail.com",
//     },
//   });
//   const films = await filmsResponse.json();

//   const filmTableBody = document.getElementById("film-tbody");
//   filmTableBody.innerHTML = "";

//   // Фильтруем фильмы
//   const filteredFilms = filterFilms(films);

//   filteredFilms.forEach((film, index) => {
//     const row = document.createElement('tr');
//     row.dataset.id = `${film.id}`;
//     row.innerHTML = `
//       <td>${film.title}</td>
//       <td>${film.genre}</td>
//       <td>${film.releaseYear}</td>
//       <td>${film.isWatched ? "Да" : "Нет"}</td>
//       <td><button class="btn-del" data-id="${film.id}">Удалить</button>
//     `;
//     filmTableBody.appendChild(row);
//   });
// }

// // Функция для добавления обработчиков событий фильтрации
// function setupFilters() {
//   filterTitle.addEventListener('input', renderTable);
//   filterGenre.addEventListener('input', renderTable);
//   filterRelease.addEventListener('input', renderTable);
//   filterSelect.addEventListener('change', renderTable);
// }

// // Обновите функцию deleteFilm для работы с фильтрацией
// async function deleteFilm() {
//   const filmTableBody = document.getElementById("film-tbody");
//   filmTableBody.addEventListener('click', (e) => {
//     if (e.target.classList.contains('btn-del')) {
//       const index = e.target.dataset.id;
//       e.target.closest('tr').remove();
//       deleteFilmServer(index);
//       // После удаления перерисовываем таблицу, чтобы применить текущие фильтры
//       setTimeout(renderTable, 100);
//     }
//   });
// }

// // В конце файла добавьте вызов setupFilters
// renderTable();
// deleteFilm();
// setupFilters(); // Добавьте эту строку