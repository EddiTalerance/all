const boxOffice = 7;
let box

switch(boxOffice) {
    case 1:
        box = "Свободная касса №1";
        break;
    case 2:
        box = "Свободная касса №2";
        break;
    case 3:
        box = "Свободная касса №3";
        break;
    case 4:
        box = "Свободная касса №4";
        break;
    default:
        box = "Свободных касс нет";
        break;
}

console.log(box);