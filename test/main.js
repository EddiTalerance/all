const words = ["Hello", " ", "world", "!", " ", "How", " ", "are", " ", "you", "?"];

// Задача: Соединить все слова в одну строку
// Ожидаемый результат: "Hello world! How are you?"

const sentence = words.reduce((acc, word) => {
    return acc + word;
}, "");

console.log(sentence);