const fn = () => {

}

const pow = (n) => {  //можно удалить return и фигурные скобки если функция не многострочная
    return n * n;
}

const pow1 = (n) => n * n; //так же можно удалить круглые скобки у аргумента если аргумент один

const pow2 = n => n * n;  //все три записи равнозначны


console.log(pow(10));
console.log(pow1(10));
console.log(pow2(10));