const switchBtn = document.querySelector('#switch');
const body = document.querySelector('#body');

function onLoad () {
    const currentTheme = localStorage.getItem('theme')  ?? 'day'

    body.className = currentTheme

    switchBtn.textContent = currentTheme === 'day' ? "Поменять на ночную тему" : "Поменять на дневную тему"
}

switchBtn.onclick = function () {
    const currentTheme = body.className
    const newClass = currentTheme === 'day' ? 'night' : 'day'

    localStorage.setItem('theme', newClass);
    body.className = newClass;

    switchBtn.textContent = newClass === 'day' ? "Поменять на ночную тему" : "Поменять на дневную тему"

}

onLoad()