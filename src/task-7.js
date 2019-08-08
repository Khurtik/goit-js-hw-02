'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Ввведите число');

  if (input !== null) {
    numbers.push(input);
  }
} while (input !== null);

for (const number of numbers) {
  if (numbers.length > 0) {
    total += Number(number);
  }
}

console.log(`Общая сумма чисел равна ${total}`);
