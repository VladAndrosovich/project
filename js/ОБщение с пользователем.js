"use strict";

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);
//встроенное модальное окно
// const answer = prompt('Вам есть 18 ?', '18');
// // typeof показывает тип переменной
// console.log(answer + 5);
const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Фамилия?', '');
answers[2] = prompt('Ты пидор?', '');

document.write(answers);
