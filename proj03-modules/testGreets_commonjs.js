const {greets1,greets2} = require("./Greets1.js");

const {Greets} = require("./Greets1.js");

const greets = new Greets("Andrei","Instructor");

console.log(greets1,'-----', greets2)
console.log(greets.sayGreets());

