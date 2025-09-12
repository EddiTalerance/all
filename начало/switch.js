const tumbler = true;

if (tumbler === true) {
    console.log("Свет есть");
} else {
    console.log("Света нет");
}

tumbler === true ? console.log("Свет есть") : console.log("Света нет"); //условие выполнено ? да, вывод информации : иначе вывод информации

const age = 21;

const person = age < 12 ? "Ребенок"
    : age >= 13 && age <= 20 ? "Подрсток"
    : age >= 21 && age <= 99 ? "Взрослый"
    : "Долгожитель"

    console.log(person);

    // switch 
    const day = 6;
    let dayName;

    switch (day) {
        case 1:  //значение кейс то что задано в day
            dayName = "Понедельник";
            break; //останавливает код если условие выполненно, без него даже если условие найдено, код продолжает работать дальше
        case 2:
            dayName = "Вторник";
            break;
        case 3:
            dayName = "Среда";
            break;
        case 4:
            dayName = "Четверг";
            break;
        case 5:
            dayName = "Пятница";
            break;
        case 6:
        case 7:  //Так же кейсы можно объединять
            dayName = "Выходной";
            break;
        default: //приравнивается к else
            dayName = "Неверный ввод данных";
            break;
    }

    console.log(dayName);