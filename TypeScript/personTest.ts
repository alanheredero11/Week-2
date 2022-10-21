import {Person} from "./person"

let cliente = new Person("Albert", 38, "Calle Robles 17")

console.log(cliente);
cliente.setName("Andres");
console.log(cliente.getName());
cliente.setAge(24);
console.log(cliente.getAge());
cliente.setAdress("Caller Aromaflor");
console.log(cliente.getAdress());

cliente.printName();

console.log(cliente.yearOfBirth(2022));
