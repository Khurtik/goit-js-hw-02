'use strict';

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

const userToDelete = 'Ajax';

const userToInsert = 'Kong';

const insertBefore = 'Jay';

console.log(users.shift());
console.log(users);

console.log(users.pop());
console.log(users);

console.log(users.unshift('Lux'));
console.log(users);

users.push('Jay', 'Kiwi');
console.log(users);

users.splice(users.indexOf(userToDelete), 1);
console.log(users);

users.splice(users.indexOf(insertBefore), 0, userToInsert);
console.log(users);
