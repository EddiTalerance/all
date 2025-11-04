const email = 'edditalerance@gmail.com';

async function getAllFilms() {
    const response = await fetch('https://sb-film.skillbox.cc/films', {
        headers: {
            email,
        }
    })
    const data = await response.json();
    console.log(data)
}

async function addFilm (film) {
    await fetch('https://sb-film.skillbox.cc/films', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            email
        },
        body: JSON.stringify(film)
    })

    getAllFilms()
}

// addFilm({
//     title: 'Back to the future',
//     genre: 'Fantastic',
//     releaseYear: '1995',
//     isWatched: false
// })

async function deleteFilm(id) {
    const response = await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
        method: 'DELETE',
        headers: {
            email
        }
    })
    const data = await response.json();
    console.log(data);

    getAllFilms();
}

async function clearFilms () {
    const respone = await fetch('https://sb-film.skillbox.cc/films', {
        method: 'DELETE',
        headers: {
            email,
        }
    })

    const data = await respone.json();
    console.log(data);
    getAllFilms();
}

clearFilms();