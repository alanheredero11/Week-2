let clase_person = require("./person.js")

let adrian = new clase_person.Person("adrian", "gutierrez", 80, 1.80, 1967);

adrian.edad = adrian.calcEdad(2022);
adrian.color_pelo = "Castaño";
adrian.genero = "Hombre";
adrian.nacionalidad = "España";
adrian.hobbies = ["Cantar", "Saltar", "Correr", "Respirar"]

console.log("El imc de " + adrian.nombre + " es: " + adrian.calculoimc() + "\n")

adrian.printHobbies()                   // se muestra como una string debido al salto de linea "\n" que ha puesto en la funcion

adrian.printAll()