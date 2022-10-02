import {greets1,greets2} from "./Greets2.js";
import {default as G} from "./Greets2.js";
import Greets from "./Greets2.js";
import * as NS from "./Greets2.js";

//import from "./Greets2.js";

const greets = new G("Andrei","Instructor");

console.log(greets1,'-----', greets2)
console.log(greets.sayGreets());
console.log('ns2 --> ', NS.greets1);
