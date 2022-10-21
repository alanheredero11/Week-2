import { Library } from "./Library";
import { Book } from "./book";

let book1 = new Book("Coleccion Antigua", 555, "EFVnd93288458-28ed2nbfd88", "Angelica Smith", "Grupo Planeto")
let book2 = new Book("Coleccion Nueva", 777, "3hf0ewhf-eofiuhf74r87fh", "Tom Godofredo", "Grupo Planeto")
let book3 = new Book("Fruta Nueva", 666, "3hf0ewhf-eofiuhf74r87fh", "Angelica Smith", "Grupo Planeto")
let book4 = new Book("Colonia Nueva", 111, "3hf0ewhf-eofiuhf74r87fh", "Roberta José", "Grupo Planeto")
let book5 = new Book("Zapatos Antiguos", 256, "3hf0ewhf-eofiuhf74r87fh", "Angelica Smith", "Grupo Planeto")
let book6 = new Book("Sandia Nueva", 986, "3hf0ewhf-eofiuhf74r87fh", "Polinomia Berto", "Grupo Planeto")

let libreria_antigua = new Library([book1, book2, book3, book4, book5, book6], "Mi Direccion", "ALberto");

console.log(libreria_antigua.toString());
console.log(libreria_antigua.getNumberOfBooks());
console.log(libreria_antigua.findByAutor("Angelica Smith"));

