let contacto_agenda = require("./contacts");

let Persona1 = new contacto_agenda.contact;

Persona1.contacto[0] = 
{
    nombre: "Alan",
    apellido: "Heredero",
    altura: 1.75,
    peso: 80,
    yearOfBityh: 2000

}


Persona1.printPersons()

