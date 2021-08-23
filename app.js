let s1 = "ThisIsTheCurrentTuleroSecretKey"
let s2 = "103909082021"
let s3 = "!!!@@@###"
let total = s1 + s2 + s3

const gen = require('random-seed');

let rand = gen.create();
let seed = rand(100000000000);

console.log(`your seed is ${seed}`);

let randSeeded = gen.create(seed);
let length = s1.length + s2.length + s3.length

let result = ''
do {
    let pos = randSeeded(length)
    if (total.substr(pos, 1) !== '\n') {
        result += total.substr(pos, 1)
        total = total.substr(0, pos) + '\n' + total.substr(pos + 1)
    }
} while (result.length < length)

console.log(result)
