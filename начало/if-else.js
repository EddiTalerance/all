const color = "green";
const pedestrians = false;

if (color == "green" && !pedestrians) {
    console.log("Проезжаем");
}

else if (color == "yellow") {
    console.log("Приготовиться");
} else {
    console.log("Стоим")
}

const Petya = true;
const Masha = false;

if (Petya || Masha) {
    console.log("Иду гулять");
} else {
    console.log("Не иду гулять");
}

if (Petya && Masha) {
    console.log("Иду гулять");
} else {
    console.log("Не иду гулять");
}

if (!Petya) {
    console.log("Иду гулять");
}
else if (!Masha) {
    console.log("Не иду гулять");
} else {
    console.log("Не иду гулять");
}

