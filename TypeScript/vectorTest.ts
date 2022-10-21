import { Vector } from "./vector";

let cris = new Vector(10,5); 
let v1 = new Vector(10,7)

cris.print();
console.log(cris.add(v1));
console.log(cris.subs(v1));
console.log(cris.mult(v1));
console.log(cris.multNumber(5));