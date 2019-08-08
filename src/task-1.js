'use strict';

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

console.log(users.shift());
console.log(users);

console.log(users.pop());
console.log(users);

console.log(users.unshift('Lux'));
console.log(users);

users.splice(3, 0, 'Jay', 'Kiwi');
console.log(users);

const userToDelete = 'Ajax';
users.splice(2, 1);
console.log(users);

const userToInsert = 'Kong';
const insertBefore = 'Jay';
users.splice(2, 0, 'Kong');
console.log(users);
